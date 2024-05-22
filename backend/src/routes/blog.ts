import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'
import {CreateBlogInput,UpdateBlogInput, createBlogInput} from "@100xdevs/medium-common";
export const blogRouter = new Hono<{
    Bindings:{
    DATABASE_URL: string;
    SECRET_KEY: string;
    },
    Variables:{
        userId:string;
    }
}>()

blogRouter.use('/*',async(c,next)=>{
    const token=c.req.header("authorization")||"";
    const user=await verify(token,c.env.SECRET_KEY);
    if(user){
        c.set("userId",user.id);
        await next();
    }
    else{
        c.status(403);
        return c.text("You are not logged In");
    }
})

blogRouter.post('/', async (c) => {
const body=await c.req.json();
const {success}=createBlogInput.safeParse(body);
if(!success){
    c.status(411);
    return c.text("Input datatypes doesn't match");
}
const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())


const authorId=c.get("userId");
const blog=await prisma.blog.create({
    data:{
       title:body.title,
       content:body.content,
       authorId:Number(authorId)
    }
})

return c.json({blogId:blog.id});
})


blogRouter.put('/', async (c) => {
    
    const body=await c.req.json();
    const {success}=createBlogInput.safeParse(body);
    if(!success){
    c.status(411);
    return c.text("Input datatypes doesn't match");
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
 
    const blog=await prisma.blog.update({
        where:{
            id:body.id
        },
        data:{
           title:body.title,
           content:body.content,
           
        }
    })
    
    return c.json({blogId:blog.id});    

})

blogRouter.get('/bulk', async (c) => {
    
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    
    try{
        const blogs=await prisma.blog.findMany()
        
        return c.json({blogs});
    }catch(e){
        c.status(411);
        return c.text("May be there are no blogs");
    }
})

blogRouter.get('/:id', async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    const id=await c.req.param("id");
    
    try{
        const blog=await prisma.blog.findFirst({
            where:{
                id:Number(id)
            }
        })
        
        return c.json({blog});
    }catch(e){
        c.status(411);
        return c.text("May be the blog isn't present");
    }
    
})


    
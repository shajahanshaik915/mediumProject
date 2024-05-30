import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from "hono/jwt";
import {signinInput, signupInput} from "@100xdevs/medium-common";


export const userRouter = new Hono<{
    Bindings:{
    DATABASE_URL: string
    SECRET_KEY: string
    }
    Variable:{
    userId:Number
    }
}>()

userRouter.post('/signup', async (c) => {
const body=await c.req.json();
const {success}=signinInput.safeParse(body);
if(!success){
    c.status(411);
    return c.text("Inputs are not Correct Data types");
}
const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())

try{
    console.log(body);
    const user=await prisma.user.create({
    data:{
        username : body.username,
        password : body.password,
        name: body.name
    }
    })
    const token=await sign({id:user.id},c.env.SECRET_KEY);
    return c.json({
    token:token
    })

}catch(e){
    c.status(403);
    return c.text("Error while signup");
}
})

userRouter.post('/signin', async (c) => {

const body=await c.req.json();
const {success}=signinInput.safeParse(body);
if(!success){
    c.status(411);
    return c.text("Input datatypes doesn't match");
}
const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())

try{
    const user=await prisma.user.findFirst({
    where:{
        username : body.username,
        password : body.password,
    } 
    })
    if(user){

    const token=await sign({id:user.id},c.env.SECRET_KEY);
    return c.json({
    token:token
    })

    }
    else{
    c.status(403);
    return c.text("Invalid Credentials Or Create an account");
    }

}catch(e){
    c.status(403);
    return c.text("Error while signup");
}
})

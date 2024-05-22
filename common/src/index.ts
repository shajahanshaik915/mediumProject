import z, { number, string } from "zod"

export const signupInput=z.object({
    username:z.string(),
    password:z.string().min(6),
    name:string().optional()
})

export type SignupInput=z.infer<typeof signupInput>


export const signinInput=z.object({
    username:z.string(),
    password:z.string().min(6),
})

export type SigninInput=z.infer<typeof signinInput>

export const createBlogInput=z.object({
    title:string(),
    content:string()
})

export type CreateBlogInput=z.infer<typeof createBlogInput>


export const updateBlogInput=z.object({
    title:string().optional(),
    content:string().optional(),
    id:number().optional()
})

export type UpdateBlogInput=z.infer<typeof updateBlogInput>

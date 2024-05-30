import axios from "axios";
import { DATABASE_URL } from "../config";
import { useEffect, useState } from "react";


export interface Blog {
    title: string;
    content: string;
    id: number;
    author: {
        name: string;
    };
}


export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        axios.get<{ blogs: Blog[] }>(DATABASE_URL + '/api/v1/blog/bulk', {
            headers: {
                Authorization: localStorage.getItem("token") || "",
            }
        }).then(response => {
            setBlogs(response.data.blogs);
            setLoading(false);
        });
    }, []);
    
    return {
        loading,
        blogs
    };
};


export const useBlog=({id}:{id:string})=>{
    const [blog,setBlog]=useState<Blog>()
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        axios.get<{blog:Blog}>(`${DATABASE_URL}/api/v1/blog/${id}`,{
            headers:{
                Authorization:localStorage.getItem("token")||"",
            }
        }).then(response=>{
            setBlog(response.data.blog)
            setLoading(false);
        })
    },[id])
    return {
        blog,loading
    }
        
}
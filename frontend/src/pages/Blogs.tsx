import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { Skleton } from "../components/Skleton";
import { useBlogs } from "../hooks"

export const Blogs=()=>{
    const {loading,blogs}=useBlogs();
    
    if(loading||""){
        return <div>
            <Skleton/>
            <Skleton/>
            <Skleton/>
            
        </div>
    }
    return <div>
        <AppBar/>
        <div className="flex flex justify-center">
        <div className="">
            {
                blogs.map((blog)=>(
                    <BlogCard 
                    title={blog.title}
                    content={blog.content}
                    authorName={blog.author.name||"Anonymous"}
                    publishedDate="Sep 15 2997"
                    id={blog.id}
                />
                )
                )
            }
        </div>
        </div>
    </div>
}
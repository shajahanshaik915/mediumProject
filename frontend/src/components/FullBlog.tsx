import { Blog } from "../hooks"
import { AppBar } from "./AppBar"
import { Avatar } from "./BlogCard"

export const FullBlog=({blog}:{blog:Blog})=>{
    return <div>
        <AppBar/>

        <div className="grid grid-cols-12 px-20 pt-20">
            <div className="col-span-8">
                <div className="font-extrabold text-3xl">
                    {blog.title}
                </div>

                <div className="text-slate-400">
                    Posted on 2nd Jan 2022
                </div>

                <div className="text-lg pt-3">
                    {blog.content}
                </div>
            </div>

            <div className="col-span-4">
                <div className="text-lg">
                    Author
                </div>

                <div className="flex pt-3">
                    <div className="pt-5 pr-2">
                        <Avatar name={blog.author.name||"Ano"}/>
                    </div>

                    <div>
                        <div className="text-xl font-bold">
                            {blog.author.name||"Anonymous"}
                        </div>

                        <div className="text-slate-500">
                            At one stage in the IPL final when his bowlers were ransacking Sun Risers Hyderabad, Kolkata Knight Riders mentor Gautam Gambhir,
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
}
import { Link, useNavigate } from "react-router-dom"

interface blogCardTypes{
    authorName:string,
    publishedDate:string,
    title:string,
    content:string,
    id:Number
}
export const BlogCard=({authorName,publishedDate,title,content,id}:blogCardTypes)=>{
    
    return <Link to={`/blog/${id}`}>
        <div className="m-1 p-2 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
            <Avatar name={authorName}></Avatar> 
            <div className="text-slate-600">
                {authorName}
            </div>
            
            <div className="flex flex-col justify-center ml-2">
            <div className="h-1 w-1 rounded-full bg-gray-500 border-2 border-gray-500" /> 
            </div>

            <div className="text-gray-400 text-sm flex flex-col justify-center ml-2">
                {publishedDate}
            </div>
        </div>

        <div className="font-bold text-xl pt-2">
            {title}
        </div>

        <div className="text-lg text-slate-600">
            {content.slice(0,140)+"..."}
        </div>
            
        <div className="text-xs text-slate-500 mb-2 pt-2">
            {`${Math.ceil(content.length/100)} minute(s) read`}
        </div>
    
        <div className="bg-slate-200 w-full h-1">

        </div>
        </div>
    </Link>
}
export function LogoutButton(){
    const navigate=useNavigate();
    return <div className="flex justify-center">
        <button onClick={()=>{
            localStorage.removeItem("token");
            navigate('/signin')
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M10 17l5-5-5-5v10zm-7 5h14v-2H3V4h14V2H3c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2z"/>
            </svg>
        </button>
    </div>
    
}

export function Avatar({
    name,
    size="small",
}:{name:string,size?:"small"|"big"}){
    return <div>
        <div className={`relative inline-flex items-center justify-center ${size==="small"?"w-5 h-5":"w-8 h-8"} overflow-hidden bg-slate-800 rounded-full dark:bg-slate-800 mr-1.5`}>
        <span className={`${size==='small'?"text-xs":"text-md"} text-white dark:text-gray-300`}>{name[0]}</span>
        </div>
    </div>
    
}


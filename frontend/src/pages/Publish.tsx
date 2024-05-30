import { ChangeEvent, useState } from "react"
import { AppBar } from "../components/AppBar"
import axios from "axios";
import { DATABASE_URL } from "../config";
import { useNavigate } from "react-router-dom";


export const Pubilsh=()=>{
    const navigate=useNavigate();
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");
    return <div>
        <AppBar/>
        <div className="flex justify-center pt-10">
            <div className="w-full max-w-3xl">
                <input onChange={(e)=>{
                    setTitle(e.target.value);
                }} type="text"  aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-4  " placeholder="Title"/>

                <TextEditor onChange={(e)=>{
                    setContent(e.target.value);
                }}/>

                <button onClick={async ()=>{
                    const response=await axios.post(`${DATABASE_URL}/api/v1/blog`,{
                        title,
                        content
                    },{
                        headers:{
                            Authorization:localStorage.getItem("token")
                        }
                    })
                    navigate(`/blog/${response.data.blogId}`);
                }} type="button" className="mt-3 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Submit</button>

            </div>
        </div>

    </div>
}

const TextEditor=({onChange}:{onChange:(e:ChangeEvent<HTMLTextAreaElement>)=>void})=>{
    return <div className="pt-5"> 
    <textarea onChange={onChange} rows={10} cols={50} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write an article..."></textarea>
    </div>
}
import { Link } from "react-router-dom"
import {  LogoutButton } from "./BlogCard"

export const AppBar=()=>{
    return <div className="grid grid-cols-12 py-4 border-b px-3">
        
        <Link className="col-span-10" to={'/blogs'}>
            <div className="text-xl">
                MEDIUM
            </div>
        </Link>

        <div className="flex justify-between px-3 col-span-2">
             <Link to={'/publish'}>
                <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4  font-medium rounded-xl text-sm px-3 py-2 mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">New</button>
             </Link>


            <LogoutButton/>
        </div>
        
    </div>
}
import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { SignupInput } from "@100xdevs/medium-common"
import axios from "axios"
import { DATABASE_URL } from "../config"
export const SigninAuth=({type}:{type:"signup"|"signin"})=>{
    const navigate=useNavigate();
    const [postInputs,setPostInputs]=useState<SignupInput>({
        username:"",
        password:""
    })
    async function sendRequest(){
        try{
            const reponse=await axios.post(`${DATABASE_URL}/api/v1/user/${type==='signin'?"signin":"signup"}`,postInputs);
            const jwt=reponse.data.token;
            //console.log(token);
            localStorage.setItem("token",jwt);
            navigate('/blogs')
        }catch(e){
            //give some warning to user/....
            alert("Error While Signin Up")
        }
    }
    return <div className="flex justify-center min-h-screen">
        {/* {JSON.stringify(postInputs)}; */}
        
        <div className="flex flex-col justify-center">

            <div className="text-4xl font-bold text-center">
                Create an account
            </div>

            <div className="text-md text-slate-400 text-center mx-2">
                {type=='signup'? "Already Have an Account? ":"Dont have an account? "}
                {type=='signin'? <Link className="underline" to={'/signup'}>Signup</Link>:<Link className="underline" to={'/signin'}>SignIn</Link>}
            </div>
            
            

            <LabelledInput label="Username" placeholder="abc@example.com" onChange={(e)=>{
                setPostInputs({
                    ... postInputs,
                    username:e.target.value
                })
            }}/>

            <LabelledInput label="Password" type="password" placeholder="Enter password" onChange={(e)=>{
                setPostInputs({
                    ... postInputs,
                    password:e.target.value
                })
            }}/>
            
            <button onClick={sendRequest} type="button" className="mt-3 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type==="signup"? "Signup":"Signin"}</button>

        </div>
    </div>
}


interface labelledInputType{
    label:string,
    placeholder:string,
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void;
    type? : string
}
function LabelledInput({label,placeholder,onChange,type}:labelledInputType){
    return <div className="mt-3">
    <label className="text-lg dark:text-white">{label}</label>
    <input onChange={onChange} type={type||"text"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
    </div>
}
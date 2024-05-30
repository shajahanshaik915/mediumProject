
export const Skleton=()=>{

    

    return <div role="status" className="w-screen animate-pulse flex justify-center pt-20">
    
    <div className="m-1 p-2 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">

            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            
            <div className="flex flex-col justify-center ml-2">
            <div className="h-1 w-1 rounded-full bg-gray-500 border-2 border-gray-500" /> 
            </div>

            <div className="text-gray-400 text-sm flex flex-col justify-center ml-2">
                <div className="h-4 w-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            </div>
        </div>

        <div className="font-bold text-xl pt-2">
        <div className="h-4 w-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        </div>

        <div className="text-lg text-slate-600">
        <div className="h-4 w-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        </div>
            
        <div className="text-xs text-slate-500 mb-2 pt-2">
        <div className="h-4 w-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        </div>
    
        <div className="bg-slate-200 w-full h-1">

        </div>
        </div>


    
    <span className="sr-only">Loading...</span>
    </div>


}
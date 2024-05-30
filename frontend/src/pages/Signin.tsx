import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"
//import { SigninAuth } from "../components/signinAuth"

export const Signin=()=>{
    return <div className="grid grid-cols-2	">
    <div>
        <Auth type="signin"></Auth>
    </div>
    <div>
        <Quote/>
    </div>
    </div>
}
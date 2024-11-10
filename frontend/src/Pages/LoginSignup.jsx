import "./LoginSignup.css"
import {Link} from 'react-router-dom'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import axios from "axios";

export default function LoginSignup(){
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const Login =async()=>{
      try{
        const result = await axios.post('http://localhost:5000/shopy/signin',{
          userName:email,
          password
        })
        localStorage.setItem('token',result.data.token)
        navigate('/men')
      }
      catch(e){
        console.log("an error occured",e)
      }
      
    }
    return(
        <div className="login-background">
          j
         <div className="login-main">
            <div className="login-content">
             <h1>Login</h1>
         
            <input onChange={(e)=>{
              setEmail(e.target.value)
            }} placeholder="Email address" value={email} type="email" />
            <input onChange={(e)=>{
              setPassword(e.target.value)
            }} placeholder="Password" value={password} type="password" />
            <button onClick={()=>{
              Login();
            }}>Continue</button>
          
          <div className="signup-link">
            <p>Create an account? <Link to='/signup'>Click here</Link></p>
            <div>
                <p>By continuing, I agree to the terms of use and privacy policy.</p>
            </div>
          </div>
          </div>
        </div>
       </div>
    )
}
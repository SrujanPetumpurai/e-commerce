import './Signup.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Signup(){
const navigate = useNavigate();
  const [name,setName] = useState('')
  const [password,setPassword] = useState('')
  const handleSignup=async(e)=>{
    console.log("signup btn clicked")
    try{
      const response = await axios.post('http://localhost:5000/shopy/signup',{
        userName:name,
        password:password
      })
      localStorage.setItem('token',response.data.token)
    navigate('/men')
    }
    
catch(err){
  console.log("Wrong with the signup request")
}
    
  }

  const handleNameChange = (e)=>{
    setName(e.target.value)
  }
  const handlePasswordChange = (e)=>{
    setPassword(e.target.value)
  }
    return(
        <div className="signup-background">
       <div className="signup-main">
          <div className="signup-content">
           <h1>signup</h1>
            <input onChange={handleNameChange} placeholder='Your name' value={name} type="email" />
          <input onChange ={handlePasswordChange} value={password} placeholder="Password" type="password" />
          <button onClick={handleSignup}>Continue</button>
        <div className="login-link">
          <p>Already have an account? <Link to='/login'>Login here</Link></p>
          <div>
              <p>By continuing, I agree to the terms of use and privacy policy.</p>
          </div>
        </div>
        </div>
      </div>
     </div>
    )
}
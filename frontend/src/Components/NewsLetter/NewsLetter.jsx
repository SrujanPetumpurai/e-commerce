import './NewsLetter.css'
import {useState} from 'react'

export default function NewsLetter(){
    const [email,setEmail] = useState('')
    const handleEmail=(e)=>{
        const value = e.target.value
        setEmail(value)
    }
    return(
        <div className="newsletter-main">
            <h1>Get Exclusive Offers On Your Email</h1>
            <div id='para'>Subscribe to our newsletter and stay updated.</div>
            <div className="email">
                <input placeholder='Your email id' onChange={handleEmail} type="text"  value={email}/>
                <button>Subscribe</button>
            </div>
        </div>
    )
}
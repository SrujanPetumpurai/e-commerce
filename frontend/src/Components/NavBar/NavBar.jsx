import React from 'react'
import "./NavBar.css"
import cart from '../Assests/cart_icon.png'
import logo from '../Assests/logo_big.png'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

const NavBar=()=>{
    return(
        <div className="main">
         <div className='Nav'>
           <div className="Shopper">
            <img src={logo} alt="" />
            <span>SHOPPER</span> 
           </div>
           <ul className='elements'>
            <li><Link to='/'> Shop</Link></li>
            <li><Link to='men'>Men</Link></li>
            <li><Link to='women'>Women</Link></li>
            <li><Link to='kid'>Kids</Link></li>
           </ul>    
           <div className='Login'>
           <Link to='/login'><button>Login</button></Link>
           <Link to='/cart'> <img src={cart} alt="" /></Link> 
           
           </div>
         
           
         </div>
         <div className="detail">
                <Outlet/>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default NavBar;


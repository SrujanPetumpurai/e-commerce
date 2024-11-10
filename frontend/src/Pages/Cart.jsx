import './Cart.css'
import CartCard from '../Components/CartCard/CartCard';
import { useEffect,useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios'
export default function Cart(){
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();
   useEffect(()=>{
    const functionBulk = async()=>{
        try {
            const token = localStorage.getItem('token')
            const response = await axios.get('http://localhost:5000/shopy/getCartItems',{ headers:{
                Authorization:`Bearer ${token}`
            }});
            setCartItems(response.data.cartItems);
          } catch (error) {
            console.error('Error fetching cart items:', error);
           navigate('/men')
          }
    }
    functionBulk();
   },[])
    return(
        <div className="cart-main">
            <div className="cart-heading">
                <ul className='horizontal-list'>
                    <li>Products</li>
                    <li>Title</li>
                    <li>Price</li>
                    <li>Quantity</li>
                    <li>Total</li>
                    <li>Remove</li>
                </ul>
                <div>{cartItems.map(m=>{
                    return <CartCard id={m}></CartCard>
                })}</div>
            </div>

        </div>
    )
}

//I will get a array from getCartItems, I need to map over them and show them here
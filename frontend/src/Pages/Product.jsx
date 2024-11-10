import {useParams} from 'react-router-dom'
import all_product from '../Components/Assests/all_product'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import './Product.css'
import ReactStars from 'react-rating-stars-component'
export default function Product(){
    const navigate = useNavigate();
    const {id} = useParams();
    const fP = all_product.find(p=> p.id===parseInt(id))
    const addtoCart = async() => {
        try{
            const token = localStorage.getItem('token');
            const result = await axios.post('http://localhost:5000/shopy/addCart',{
                id:fP.id
               },{
                headers:{
                    Authorization:`Bearer ${token}`
                }
               })
        }catch(e){
            navigate('/login')
        }
       
       
    };
   
    return(
        <div className="product-main">
            <div className="product-img">
                <div className="small-imgs">
                    <img src={fP.image} alt="" />
                    <img src={fP.image} alt="" />
                    <img src={fP.image} alt="" />
                    <img src={fP.image} alt="" />
                </div>
                <div className="main-img">
                  <img src= {fP.image} alt="" />  
                </div>
            </div>
            <div className="product-info">
                <h1>{fP.name}</h1>
                <div className="product-rating">
                  <ReactStars
                  count={5}
                  value={3}
                  size={24}
                  activeColor="#ffd700" // Gold color for active stars
                  isHalf={true} // Allow half-stars
                  edit={false} // Set to true if you want it to be interactive
                  /> <span>(122)</span>
                </div>
                <div className="product-cost">
                    <span>${fP.old_price}</span>
                    <span>${fP.new_price}</span>
                </div>
                <div className="product-description">
                        <p>
                            A lightweight, usually knitted, pullover shirt, close-fitting and with 
                            a round neckline and short sleeves, worn as an undershirt or outer garment.
                        </p>
                </div>
                <div className="product-sizes">
                    <h3>Select Size</h3>
                    <ul>
                        <li>S</li>
                        <li>M</li>
                        <li>L</li>
                        <li>XL</li>
                        <li>XXL</li>
                    </ul>
                </div>
                <div className="add-cart">
                    <button onClick={addtoCart}>ADD TO CART</button>
                    <p>
                       <span> <b>Category</b>:Women,T-shirt,Crop Top</span>
                        <span><b>Tags</b>:Modern,Latest</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
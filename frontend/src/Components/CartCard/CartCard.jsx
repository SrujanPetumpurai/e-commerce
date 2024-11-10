import all_product from '../Assests/all_product'
import './CartCard.css'
import axios from 'axios'

export default function CartCard({id}){
    const fP = all_product.find(p=> p.id===parseInt(id))
    const removeItem =async (e)=>{
        const token = localStorage.getItem('token')
        const result = await axios.post('http://localhost:5000/shopy/removeCartItem',{
            itemRemove:id
        },{ headers:{
            Authorization:`Bearer ${token}`
        }})
    }
    if(!fP){
        return console.log("fP not found")
    }
    return(
        <div className='cartCard-container'>
            <div id='card-image'><img   src={fP.image} alt="" /></div>
            <div>{fP.name}</div>
            <div>${fP.new_price}</div>
            <div>1</div>
            <div>${fP.new_price}</div>
            <div><svg onClick={removeItem} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></div>
        </div>
    ) 
}
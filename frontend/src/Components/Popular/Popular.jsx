import "./Popular.css"
import { useNavigate } from "react-router-dom"

import data_product from "../Assests/data"

export default function Popular(){

  const navigate = useNavigate();
  const handleClick =(id)=>{
    navigate(`/product/${id}`)
  }
    return(
        <div className="popular-main">
          <div id="popular-heading">POPULAR IN WOMEN</div>  
          <div className="products">
            {data_product.map((item,i)=>{
              return  ( <div className="product"> 
                <img onClick={()=>handleClick(item.id)} key={i} src={item.image} alt="" />
                <p>{item.name}</p>
                <div className="cost">
                  <span>${item.new_price}</span>
                  <span>${item.old_price}</span>
                </div>
                        </div>)
            })}
          </div>
        </div>
    )
}
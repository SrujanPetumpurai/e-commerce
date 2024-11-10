import './Collections.css'
import new_collections from "../Assests/new_collections"
import { useNavigate } from 'react-router-dom';


export default function Collections(){
  const navigate = useNavigate();
  const handleClick =(id)=>{
    navigate(`/product/${id}`)
  }
    return(
        <div className="collection-main">
         <div id="collection-heading">NEW COLLECTIONS</div>  
          <div className="collections">
          {new_collections.map((item,i)=>{
          
            return  ( <div className='collections-product'>
              <img onClick={()=>handleClick(item.id)} key={i} src={item.image} alt="" />
              <p>{item.name}</p>
               <div className="collection-cost">
                <span>${item.new_price}</span>
                <span>${item.old_price}</span>
               </div>
              </div>   )
          })}
        </div>
      </div>
    )
}
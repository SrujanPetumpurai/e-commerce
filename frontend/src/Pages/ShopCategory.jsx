import  './ShopCategory.css'
import all_products from '../Components/Assests/all_product'
import {useLocation} from 'react-router-dom'
import bannerMens from '../Components/Assests/banner_mens.png'
import bannerWomens from '../Components/Assests/banner_women.png';
import bannerKids from '../Components/Assests/banner_kids.png';
import { useNavigate } from 'react-router-dom';

const setBackground = (pathname) => {
    switch (pathname) {
        case '/men':
            return `url(${bannerMens})`;
        case '/women':
            return `url(${bannerWomens})`;
        case '/kid':
            return `url(${bannerKids})`;
        default:
            return `url(${bannerMens})`;
    }
}





export default function ShopCategory(){
    const location =  useLocation();
    const backgroundImg = setBackground(location.pathname)
    const category = location.pathname.split('/')[1];
    const array = all_products.filter(p=>p.category ===category)
    const navigate = useNavigate();
    const handleClick =(id)=>{
      navigate(`/product/${id}`)
    }
    return(
        <div className="shopcategory-main">
          <div id='banner' style={{backgroundImage:backgroundImg}}>
            d 
          </div>
          <div className='showing-products'><div>showing 1-12 out of 54 Products </div>
          <div>
            <div>
            <button>Sort by</button>
            </div>
            </div></div>
          <div className='shopcategory-products'>
            {array.map((product,idx)=>{
                return  ( <div className='shopcategory-product'>
                    <img onClick={()=>handleClick(product.id)} key={idx} src={product.image} alt="" />
                    <p>{product.name}</p>
                     <div className="shopcategory-cost">
                      <span>${product.new_price}</span>
                      <span>${product.old_price}</span>
                     </div>
                    </div>  )
            })}
          </div>
        </div>
    )
}
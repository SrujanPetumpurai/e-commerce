import './Offer.css'
import exclusive from '../Assests/exclusive_image.png'

export default function Offer(){
    return(
        <div className='offer'>
            <div className="offer-info">
                <h1><span id='exclusive'>Exclusive</span> Offers For You</h1>
                <span id='best-sellers'>ONLY ON BEST SELLERS PRODUCTS</span>
                <button>Check now</button>
            </div>
            <div className="offer-poster">
                <img src={exclusive} alt="" />
            </div>
        </div>
    )
}
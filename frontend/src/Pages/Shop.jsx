import './Shop.css'
import hero from '../Components/Assests/hero_image.png'
import hand_icon from '../Components/Assests/hand_icon.png'
import arrow from '../Components/Assests/arrow.png'
import Popular from '../Components/Popular/Popular'
import Offer from '../Components/Offer/Offer'
import Collections from '../Components/New collections/Collections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

export default function Shop(){
    return(
    <div className="Shop-main">
        <div className="Shop">
            <div className="intro">
                <span>NEW ARRIVALS ONLY</span>
                <h1><span>new <img src={hand_icon} alt="" /></span><span>collections</span>  for everyone</h1>
                <button id='latest'>Latest Collection <img src={arrow} alt="" /></button>
            </div>
            <div className="person">
                <img src={hero} alt="" />
            </div>
            
        </div>
        <Popular></Popular>
        <div>
            <Offer></Offer>
        </div>
        <div>
            <Collections></Collections>
        </div>
        <div>
            <NewsLetter></NewsLetter>
        </div>
       
     </div>
    )
}
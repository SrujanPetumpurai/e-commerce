import './Footer.css'
import logo from  '../Assests/logo.png'
import whatsapp from '../Assests/whatsapp_icon.png'
import pintester from '../Assests/pintester_icon.png'
import instagram from '../Assests/instagram_icon.png'

export default function Footer(){

    return(
        <div className="footer-main">
            <div id='footer-heading'>
                <img src={logo} alt="" />
                SHOPPER
            </div>
            <div className='contact-info'>
              <ul>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div >
            <div className='footer-logos'>
                <img src={instagram} alt="" />
                <img src={pintester} alt="" />
                <img src={whatsapp} alt="" />
            </div>
            <div id='copyright'>
                copyright@2024-All Right Reserved
            </div>
        </div>
    )
}
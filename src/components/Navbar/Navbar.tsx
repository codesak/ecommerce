import './Navbar.scss'
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='nav__container'>
       <div className="nav__contact__details">
        <div>
          <FaWhatsapp/>
          <p>WhatsApp Your Order</p>
        </div>
        <div>
          <FaPhoneAlt/>
          <p>+9111-41087447</p>
        </div>
       </div>
    </nav>
  )
}

export default Navbar
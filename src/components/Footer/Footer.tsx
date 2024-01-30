import './Footer.scss'
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaYoutube,
  FaArrowAltCircleRight,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer__container">
      <section className="footer__links__container">
        <div className="footer__logo">
          <h1>Logo</h1>
        </div>
        <div className="footer__links">
          <li>About Us</li>
          <li>Why say organic?</li>
          <li>What does organic mean?</li>
          <li>Contact</li>
          <li>Stores</li>
          <li>Our Farmers</li>
          <li>Refund Policy</li>
          <li>Terms of Service</li>
          <li>Terms & conditions</li>
        </div>
        <div className="footer__links">
          <li>See Products</li>
          <li>Place Orders</li>
          <li>Blog</li>
        </div>
        <div className="footer__links">
          <li>FAQ</li>
          <li>Shipping Policy</li>
          <li>Return Policy</li>
          <li>Privacy Policy</li>
        </div>
        <div className="footer__links">
          <li>Administrative office:</li>
          <li>011-41087447</li>
          <li>
            106, Pocket C, Okhla Phase I, Okhla Industrial Area, New Delhi,
            Delhi 110020
          </li>
        </div>
      </section>

      <section className="footer__socials">
        <div className="footer__icons">
          <FaFacebookSquare size={35} />
          <FaInstagram size={35} />
          <FaTwitterSquare size={35} />
          <FaYoutube size={35} />
        </div>
        <div className="email__section">
          <input type="email" placeholder="Email" />
          <button>
            <FaArrowAltCircleRight size={35} color='white' />
          </button>
        </div>
      </section>

      <section className="footer__copyright">
        © 2024 I Say Organic. All Rights Reserved.
      </section>
    </footer>
  )
}

export default Footer

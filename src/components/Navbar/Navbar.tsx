import './Navbar.scss'
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'
import data from '../../utils/Category.json'
import {
  MdOutlineKeyboardArrowDown,
  MdKeyboardArrowRight,
} from 'react-icons/md'

import { RiArrowUpSLine } from 'react-icons/ri'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="nav__container">
      <section className="nav__contact__details">
        <div>
          <FaWhatsapp />
          <p>WhatsApp Your Order</p>
        </div>
        <div>
          <FaPhoneAlt />
          <p>+9111-41087447</p>
        </div>
      </section>

      <section className="nav__category">
        {data?.map((item, index) => (
          
            <div className="category__title" key={index}>
              {item?.title}
              {<RiArrowUpSLine className="icon__up" color="black" size={20} />}
              {
                <MdOutlineKeyboardArrowDown
                  color="black"
                  size={20}
                  className="icon__down"
                />
              }
            </div>

            
        ))}
      </section>
    </nav>
  )
}

export default Navbar

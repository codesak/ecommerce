import './ProductCarousel.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const ProductCarousel = () => {
    const data = [
        {"img":"https://www.isayorganic.com/cdn/shop/files/immunitea_WEB_banner-24_4c2d3fd4-7722-4000-9cef-421f0fce8fb3.png?v=1705337207"},
        {"img":"https://www.isayorganic.com/cdn/shop/files/immunitea_WEB_banner-24_4c2d3fd4-7722-4000-9cef-421f0fce8fb3_1296x.png?v=1705337207"},
        {"img":"https://www.isayorganic.com/cdn/shop/files/BANNER_REF-17-17_1.jpg?v=1658765759"},
    ]
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3500,
        autoplaySpeed: 6000,
        cssEase: 'linear',
      }
  return (
    <section className='productCarousel__container'>
        <Slider {...settings} className="carousel__card">
      {data?.map((item, index)=>(
        <div className="product__card" key={index}>
          <img src={item.img} alt="img" />
        </div>
      ))}
      </Slider>
    </section>
  )
}

export default ProductCarousel
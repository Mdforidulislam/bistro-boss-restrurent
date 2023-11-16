import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './yourCustomStyles.css'; // Import your custom CSS if needed
import 'swiper/less/navigation';
import 'swiper/less/pagination';

import productImg1 from '../../assets/home/slide1.jpg'
import productImg2 from '../../assets/home/slide2.jpg'
import productIm3 from '../../assets/home/slide3.jpg'
import productImg4 from '../../assets/home/slide4.jpg'
import productImg5 from '../../assets/home/slide5.jpg'

const ProductSlider = () => {
  return (
    <Swiper
    spaceBetween={10}
    slidesPerView={4}
    pagination={{ clickable: true }}
    loop={true}
    navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
    >
      <SwiperSlide>
        <img src={productImg1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={productImg2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={productIm3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={productImg4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={productImg5} alt="" />
      </SwiperSlide>

      {/* Custom navigation buttons */}
      <div className="swiper-button-next">Next</div>
      <div className="swiper-button-prev">Preve</div>
    </Swiper>
  );
};

export default ProductSlider;

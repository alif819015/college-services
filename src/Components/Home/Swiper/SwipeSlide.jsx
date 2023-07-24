import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import img1 from '../../../../public/1.jpeg';
import img2 from '../../../../public/2.png';
import img3 from '../../../../public/3.jpg';
import img4 from '../../../../public/4.jpg';
import img5 from '../../../../public/5.jpg';
import img6 from '../../../../public/6.jpg';
import img7 from '../../../../public/7.png';
import img8 from '../../../../public/8.jpg';
import './SwipeSlide.css'; 
import './SwipeSlide.css';

const SwipeSlide = () => {
  return (
    <>
    <div className="relative my-5 mx-2 md:mx-10 sm:mx-2">
    <input type="text" placeholder="Search here" className="input input-bordered w-full pr-16" /> 
    <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Search</button>
  </div>
    <div className='my-5'>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} alt="" className="swiper-image" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" className="swiper-image" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" className="swiper-image" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" className="swiper-image" /></SwiperSlide>
        <SwiperSlide><img src={img5} alt="" className="swiper-image" /></SwiperSlide>
        <SwiperSlide><img src={img6} alt="" className="swiper-image" /></SwiperSlide>
        <SwiperSlide><img src={img7} alt="" className="swiper-image" /></SwiperSlide>
        <SwiperSlide><img src={img8} alt="" className="swiper-image" /></SwiperSlide>
      </Swiper>
    </div>
    </>
  );
};

export default SwipeSlide;

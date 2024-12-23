import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import bannar1 from '../animation/bannar1.json'
import Lottie from 'lottie-react'

const Bannar = () => {
    return (
        <div className='container px-6 py-10 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
         <div className='h-[500px]'> </div>
        </SwiperSlide>
        <SwiperSlide>
        <div  className='h-[500px]'> </div>
        </SwiperSlide>
        <SwiperSlide>
        <div  className='h-[500px]'></div>
        </SwiperSlide>
      </Swiper>
    </div>
    );
};

export default Bannar;
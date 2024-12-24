import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
// import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import quesiotn from '../../src/assets/question.jpg'
import quesiotn2 from '../../src/assets/question2.jpg'
import quesiotn3 from '../../src/assets/question3.jpg'

const Bannar = () => {
    return (
        <div className='  mx-auto'>
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
        // navigation={true}
        // modules={[Autoplay, Pagination, Navigation]}
        // className='mySwiper'
      >
        <SwiperSlide>
        <div className="App">
      {/* Banner Section with Background Image */}
      <div className="relative w-full h-[600px] bg-cover bg-center transition-all duration-1000 ease-in-out transform hover:scale-105"
           style={{ backgroundImage: `url(${quesiotn})` }}>
        {/* Dark Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        {/* Content Section */}
        <div className="relative z-10 text-center text-white py-32 px-6">
          <h1 className="text-5xl font-extrabold mb-6 tracking-wide drop-shadow-xl animate__animated animate__fadeIn animate__delay-1s">
            Welcome to the Q&A Hub!
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md animate__animated animate__fadeIn animate__delay-2s">
            Find answers to your questions, or ask your own! Explore a community of knowledge.
          </p>
          <button className="bg-gradient-to-r from-[#380F8F] to-[#4a1dac] text-white py-3 px-8 rounded-full text-xl font-semibold hover:from-[#5e3da7] hover:to-[#380F8F] transform transition-all duration-300 ease-in-out">
            Start Query
          </button>
        </div>
      </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="App">
      {/* Banner Section with Background Image */}
      <div className="relative w-full h-[600px] bg-cover  transition-all duration-1000 ease-in-out transform hover:scale-105"
           style={{ backgroundImage: `url(${quesiotn2})` }}>
        {/* Dark Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-10"></div>
        
        {/* Content Section */}
        <div className="relative z-10 text-center text-white py-32 px-6">
          {/* Heading with a different style */}
          <h1 className="text-5xl  text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-pink-900 mb-6 tracking-tight">
            Welcome to the Q&A Hub!
          </h1>
          {/* Paragraph */}
          <p className="text-2xl sm:text-xl md:text-xl mb-8 max-w-2xl mx-auto opacity-80">
            Find answers to your questions, ask your own, and be part of a thriving knowledge community.
          </p>
          {/* Button with an interactive effect */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 ease-in-out scale-100 hover:scale-110">
            Start Asking
          </button>
        </div>
      </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="App">
      {/* Banner Section with Background Image */}
      <div className="relative w-full h-[600px] bg-cover transition-all duration-1000 ease-in-out transform hover:scale-110"
           style={{ backgroundImage: `url(${quesiotn3})` }}>
        {/* Dark Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        {/* Content Section */}
        <div className="relative z-10 text-center text-white py-32 px-6">
          {/* Heading with bold text and cool effects */}
          <h1 className="text-5xl font-bold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500 animate__animated animate__fadeIn animate__delay-1s">
            Welcome to Our Q&A Platform!
          </h1>
          {/* Paragraph with a slight animation */}
          <p className="text-xl sm:text-xl md:text-xl mb-8 max-w-3xl mx-auto opacity-85 animate__animated animate__fadeIn animate__delay-2s">
            Ask questions, discover answers, and engage with experts. Join our growing community today.
          </p>
          {/* Button with dynamic hover effects */}
          <button className="bg-purple-600 hover:bg-purple-700 text-white py-4 px-10 rounded-full text-lg font-semibold shadow-2xl hover:shadow-2xl transform transition-all duration-300 ease-in-out scale-100 hover:scale-110">
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
        </SwiperSlide>
      </Swiper>
    </div>
    );
};

export default Bannar;
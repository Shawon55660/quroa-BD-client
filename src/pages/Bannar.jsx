import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
// import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import quesiotn from '../../src/assets/question.jpg'
import quesiotn2 from '../../src/assets/question2.jpg'
import quesiotn3 from '../../src/assets/question3.jpg'
import { Link } from 'react-router-dom'

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
        <div className="App relative">
      {/* Banner Section with Background Image */}
      <div className="relative w-full h-[600px] bg-cover transition-all duration-1000 ease-in-out transform hover:scale-110"
           style={{ backgroundImage: `url(${quesiotn3})` }}>
        {/* Dark Overlay for better text visibility */}
        {/* <div className="absolute inset-0 bg-black opacity-20"></div> */}
        
        {/* Content Section */}
        <div className="relative z-10 text-center text-white py-32 px-6">
          {/* Heading with bold text and cool effects */}
          <h1 className="text-5xl font-bold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#EF4444] to-[#ee3c3c] animate__animated animate__fadeIn animate__delay-1s">
            Welcome to Our Q&A Platform!
          </h1>
          {/* Paragraph with a slight animation */}
          <p className="text-xl sm:text-xl md:text-xl mb-8 max-w-3xl mx-auto text-gray-900 opacity-85 animate__animated animate__fadeIn animate__delay-2s">
            Ask questions, discover answers, and engage with experts. Join our growing community today.
          </p>
          {/* Button with dynamic hover effects */}
          <Link to='/queries'><button className="bg-gradient-to-r from-[#EF4444] to-[#ff5858] text-white py-3 px-8 rounded-full text-lg font-semibold hover:from-[#fd5656] hover:to-[#EF4444] transform transition-all duration-300 ease-in-out">
          Start Your Journey
          </button></Link>
          
        </div>
      </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="App">
      {/* Banner Section with Background Image */}
      <div className="relative w-full h-[600px] bg-cover  transition-all duration-1000 ease-in-out transform hover:scale-105"
           style={{ backgroundImage: `url(${quesiotn})` }}>
        {/* Dark Overlay for better text visibility */}
        {/* <div className="absolute inset-0 bg-black opacity-40"></div> */}
        
        {/* Content Section */}
        <div className="relative z-10 text-center text-[#fa4747] py-32 px-6">
          <h1 className="text-5xl font-extrabold mb-6   tracking-wide drop-shadow-xl animate__animated animate__fadeIn animate__delay-1s">
            Welcome to the Q&A Hub!
          </h1>
          <p className="text-lg text-black sm:text-xl  md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md animate__animated animate__fadeIn animate__delay-2s">
            Find answers to your questions, or ask your own! Explore a community of knowledge.
          </p>
          <Link to='/my-queries'><button className="bg-gradient-to-r from-[#fa4748] to-[#fa4747] text-white py-3 px-8 rounded-full text-lg font-semibold hover:from-[#fa4747] hover:to-[#eae0ff] transform transition-all duration-300 ease-in-out">
            Start Query
          </button></Link>
          
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
        {/* <div className="absolute inset-0 bg-black opacity-10"></div> */}
        
        {/* Content Section */}
        <div className="relative z-10 text-center text-white py-32 px-6">
          {/* Heading with a different style */}
          <h1 className="text-5xl  text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-900 mb-6 tracking-tight">
            Welcome to the Q&A Hub!
          </h1>
          {/* Paragraph */}
          <p className="text-2xl sm:text-xl md:text-xl mb-8 max-w-2xl mx-auto opacity-80">
            Find answers to your questions, ask your own, and be part of a thriving knowledge community.
          </p>
          {/* Button with an interactive effect */}
          <Link to='/queries'><button className="bg-gradient-to-r from-[#1e1d20] to-[#0f0e11] text-white py-3 px-8 rounded-full text-lg font-semibold hover:from-[#121114] hover:to-[#1e1c20] transform transition-all duration-300 ease-in-out">
            See Query Answers
          </button></Link>
        </div>
      </div>
    </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
    );
};

export default Bannar;
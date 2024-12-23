import Lottie from 'lottie-react';
import errorAnimation from '../animation/error.json'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Error = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-[80vh]'>
           <div className=' md:w-7/12 mx-auto'><Lottie animationData={errorAnimation}></Lottie></div>
           <div > <Link to='/'> <button className='text-white flex items-center gap-2 justify-center py-2 px-4 rounded-sm  bg-[#380F8F]'  > <FaArrowLeft size={15} /><span>Back to Home</span> </button></Link></div>
        </div>
    );
};

export default Error;
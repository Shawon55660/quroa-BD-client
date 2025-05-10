
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer';

const Main = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            {/* navbar start here  */}
           <div className='sticky top-0 z-50'>  <Navbar></Navbar></div>
            {/* navbar end here  */}
            {/* outlet start  here  */}
            <div  className='min-h-screen  overflow-y-hidden'>
            <Outlet></Outlet>
            </div>
            
            {/* outlet end  here  */}
            {/* footer start here  */}
            <Footer></Footer>
            {/* footer end here  */}

            
        </div>
    );
};

export default Main;

import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer';

const Main = () => {
    return (
        <div>
            {/* navbar start here  */}
            <Navbar></Navbar>
            {/* navbar end here  */}
            {/* outlet start  here  */}
            <div  className='min-h-[calc(100vh-290px)]'>
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

import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Navbar';

const Main = () => {
    return (
        <div>
            {/* navbar start here  */}
            <Navbar></Navbar>
            {/* navbar end here  */}
            {/* outlet start  here  */}
            <Outlet></Outlet>
            {/* outlet end  here  */}

            
        </div>
    );
};

export default Main;
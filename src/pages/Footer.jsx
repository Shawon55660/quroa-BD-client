import Lottie from "lottie-react";
import { FaLinkedin } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import data from '../animation/footer.json'



const Footer = () => {
    return (
        <div>
    <footer className=" grid md:grid-cols-2  w-full footer-center bg-gray-800 text-primary-content ">
  <div className="flex flex-col gap-4">
  <aside>
<img className="mx-auto my-2" src="https://img.icons8.com/?size=80&id=lR3GPGorCbvp&format=png&color=000000" alt="" />

   
    <p className="font-bold text-2xl">
      Quora BD  Ltd.
    </p>
    < p className="text-xl my-2">  Providing Shawon tech since 2001</p>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a>
      <ImFacebook2 size={27} />
      </a>
      <a>
      <FaLinkedin  size={30}/>
       
      </a>
      
    </div>
   
  </nav>
  </div>
  <div>
    <Lottie className="md:w-[400px] object-cover" animationData={data}></Lottie>
  </div>

 
</footer>
        </div>
    );
};

export default Footer;
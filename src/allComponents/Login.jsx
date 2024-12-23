/* eslint-disable react/no-unescaped-entities */

import { useContext, useState } from 'react';
import { FaRegEyeSlash } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import signIn from '../animation/register.json'
import Lottie from 'lottie-react';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';








const Login = () => {
  //pass show
  const [showPass, setShowPass] = useState(false);
  const handlePassShow = () => setShowPass(!showPass)
  const { setUser, login, googleLogin } = useContext(AuthContext)
  
  const navigate = useNavigate()
  const location = useLocation()


  const handleGoogle = () => {

    googleLogin()
      .then(users => {
        setUser(users.user)
       Swal.fire({
                     title: "Login  Successfully With Google ",
                     icon: "success",
                     draggable: true
                   });
        navigate(location?.state ? location.state : '/')
      })
      .catch(error => {
        alert(error)
      })
  }
  const handleLogin = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const passweord = form.password.value;

    login(email, passweord)
      .then(users => {
        setUser(users.user)
         Swal.fire({
                      title: "Login Successfully ",
                      icon: "success",
                      draggable: true
                    });
        navigate(location?.state ? location.state : '/')
        e.target.reset()

      })
      .catch(() => {
       toast.error('Login failed please try again')
      })
  }
  return (
    <div className='grid md:grid-cols-2 mx-auto items-center w-11/12'>
      <div className=" mx-auto  min-h-screen my-12">
        <div className=" ">

          <div className=" bg-base-100  shadow-xl">

            <form onSubmit={handleLogin} className="card-body">

              <h2 className='font-bold text-2xl text-[#380F8F] text-center'>Log In  Here </h2>


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>

              <div className="form-control relative">
                <div onClick={handlePassShow} className='absolute right-3 top-12'>
                  {
                    showPass ? <FaRegEyeSlash /> : <IoEyeOutline />

                  }
                </div>
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={`${showPass ? 'text' : 'password'}`} name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>

              </div>
              {/* {
                  passError && <p className='text-red-600 '>wrong Password</p>
                } */}


              <div className="form-control mt-4">
                <button className=" py-2 rounded-sm bg-[#380F8F]  text-white">Login </button>
              </div>

            </form>
            <div className="form-control  flex flex-col gap-3 ">
              <button onClick={handleGoogle} className='btn text-lg rounded-sm px-2 mb-6 w-11/12 mx-auto'> <img src="https://img.icons8.com/?size=30&id=17949&format=png&color=000000" alt="" /> countine with google</button>
              <div className='text-md  font-semibold mb-3 pb-3 px-6'>Don't have any account? please <Link className='text-[#380F8F] ' to='/register'>Register Now</Link> </div>

            </div>

          </div>
        </div>
      </div>
      <div>
        <Lottie className='w-10/12' animationData={signIn}></Lottie>
      </div>

    </div>
  );
};

export default Login;
/* eslint-disable react/no-unescaped-entities */

import { useContext, useState } from 'react';
import { FaRegEyeSlash } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';








const Login = () => {
    //pass show
const [showPass, setShowPass] = useState(false);
const handlePassShow = () => setShowPass(!showPass)

const {user,setUser,login,googleLogin}  = useContext(AuthContext)


const handleGoogle = ()=>{

    googleLogin()
    .then(users=>{
      setUser(users.user)
      alert('success')
    })
    .catch(error=>{
      alert(error)
    })
  }
const handleLogin = (e)=>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const passweord = form.password.value;

    login(email,passweord)
    .then(users=>{
        setUser(users.user)
        alert('login Successfully')
        
    })
    .catch(error=>{
        alert(error)
    })
}
    return (
        <div>
             <div className=" md:w-[40%] mx-auto  min-h-screen my-12">
          <div className=" ">

            <div className=" bg-base-100  shadow-xl">

              <form onSubmit={handleLogin} className="card-body">
               
                  <h2 className='font-bold text-2xl text-blue-600 text-center'>Login  Here </h2>
               

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
                  <button className=" py-2 rounded-sm bg-blue-600 text-white">Login </button>
                </div>

              </form>
              <div className="form-control  flex flex-col gap-3 ">
                <button onClick={handleGoogle} className='btn text-lg rounded-sm px-2 mb-6 w-11/12 mx-auto'> <img src="https://img.icons8.com/?size=30&id=17949&format=png&color=000000" alt="" /> countine with google</button>
                <div className='text-xl font-semibold my-3 py-3 px-6'>Don't have any account? please <Link className='text-blue-600' to='/register'>Register Now</Link> </div>

              </div>

            </div>
          </div>
        </div>
            
        </div>
    );
};

export default Login;
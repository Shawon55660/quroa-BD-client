/* eslint-disable no-unused-vars */

import { useContext, useState } from 'react';
import { FaRegEyeSlash } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import signIn from '../animation/login.json'
import Lottie from 'lottie-react';
import Swal from 'sweetalert2';

const Register = () => {

  //pass show
  const [showPass, setShowPass] = useState(false);
  const handlePassShow = () => setShowPass(!showPass)
  const [passError,setPassError] = useState('')
  const navigate = useNavigate();
  const location = useLocation()

  const { regsiter, user, setUser } = useContext(AuthContext)
  console.log(user)
  const handleRegister = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const conPassword = form.conPassword.value;
    if(password !== conPassword){
      setPassError('password and Conpassword must be some')
      return
    }

    //password validation
    const regexPass =/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if(!regexPass.test(password)){
      setPassError('Password at least 6 charcter and upper & loweer letter')
      return;
    }


    regsiter(email, password)
      .then(users => {
        setUser(users.user)
        updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
          .then(res => {

            
              setUser({ ...users.user, displayName: name, photoURL: photo })
            Swal.fire({
              title: "Registration Successfully ",
              icon: "success",
              draggable: true
            });

            e.target.reset()
            navigate(location?.state ? location.state : '/')
            

          })
          .catch(error => {
            Swal.fire({
              icon: "error",
              title: "You are already Registration  ",
              text: "Please login to stay with Us",
              
            });

          })

      })
      .catch(error => {
        Swal.fire({
          icon: "error",
          title: "You are already Registration  ",
          text: "Please login to stay with Us",
          
        });
      })
  }
  return (
    <div className='grid md:grid-cols-2 gap-8 items-center w-11/12 mx-auto  my-12'>
      <div className=" w-10/12 mx-auto  ">
        <div className=" ">


          <div className=" bg-base-100  shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <h2 className='font-bold text-2xl text-[#380F8F]  text-center'>Sign Up Here To  Free</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="enter your name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type='text' name='photo' placeholder="photo url" className="input input-bordered" required />
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
                

              </div>
              <div className="form-control relative">
                <div onClick={handlePassShow} className='absolute right-3 top-12'>
                  {
                    showPass ? <FaRegEyeSlash /> : <IoEyeOutline />

                  }
                </div>
                <label className="label">
                  <span className="label-text">Confrom Password</span>
                </label>
                <input type={`${showPass ? 'text' : 'password'}`} name='conPassword' placeholder="Confrom password" className="input input-bordered" required />
                <p className='text-red-600 mt-3'>{passError}</p>

              </div>

              <div className="form-control mt-3">
                <button className=" rounded-sm py-2 bg-[#380F8F]  text-white">Sign Up</button>
              </div>
              <div className='text-md text-center font-semibold my-3'>Already have an account? please <Link className='text-[#380F8F] ' to='/login'>Login In</Link> </div>
            </form>
          </div>

        </div>
      </div>
      <div>
        <Lottie className='w-10/12' animationData={signIn}></Lottie>
      </div>
    </div>
  );
};

export default Register;
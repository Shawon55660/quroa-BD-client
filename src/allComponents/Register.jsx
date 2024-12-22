
import { useContext, useState } from 'react';
import { FaRegEyeSlash } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const Register = () => {
    
    //pass show
    const [showPass,setShowPass]  = useState(false);
    const handlePassShow = ()=> setShowPass(!showPass)

    const {regsiter,user,setUser} =  useContext(AuthContext)
  console.log(user)
    const handleRegister =(e)=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password= form.password.value;
        const conPassword = form.conPassword.value;

        regsiter(email,password)
        .then(users=>{
            setUser(users.user)
            updateProfile(auth.currentUser,{displayName:name,photoURL:photo})
            .then(res=>{

                setUser({...users.user, displayName:name, photoURL: photo})
                alert('registration successfully')
                
            })
            .catch(error=>{
                alert(error)
            })
            
        })
        .catch(error=>{
            alert(error)
        })
    }
    return (
        <div>
            <div className=" md:w-[40%] mx-auto my-8  min-h-screen">
        <div className=" ">

         
           <div className=" bg-base-100  shadow-2xl">
            <form onSubmit={handleRegister}  className="card-body">
              <h2 className='font-bold text-2xl text-blue-600 text-center'>Sign Up Here To  Free</h2>
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
                <input type="text" name='photo' placeholder="photo url" className="input input-bordered" required />
              </div>
              <div className="form-control relative">
              <div onClick={handlePassShow} className='absolute right-3 top-12'>
              {
                  showPass? <FaRegEyeSlash />:<IoEyeOutline />

                }
              </div>
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={`${showPass ? 'text':'password'}`} name='password' placeholder="password" className="input input-bordered" required />

              </div>
              <div className="form-control relative">
              <div onClick={handlePassShow} className='absolute right-3 top-12'>
              {
                  showPass? <FaRegEyeSlash />:<IoEyeOutline />

                }
              </div>
                <label className="label">
                  <span className="label-text">Confrom Password</span>
                </label>
                <input type={`${showPass ? 'text':'password'}`} name='conPassword' placeholder="Confrom password" className="input input-bordered" required />
                {/* <p className='text-red-600 mt-3'>{passError}</p> */}

              </div>
             
              <div className="form-control mt-3">
                <button className=" rounded-sm py-2 bg-blue-600 text-white">Sign Up</button>
              </div>
              <div className='text-xl font-semibold my-3'>Already have an account? please <Link className='text-blue-600' to='/login'>Login In</Link> </div>
            </form>
          </div>
          
        </div>
      </div>
        </div>
    );
};

export default Register;
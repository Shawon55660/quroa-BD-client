import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { CgProfile } from "react-icons/cg";
import { Tooltip } from "react-tooltip";
import Swal from "sweetalert2";



const Navbar = () => {

  const { user, logOut } = useContext(AuthContext)
  const navigate = useNavigate()



  const handleLogOut = () => {
    logOut()
      .then(() => {
       
       Swal.fire({
                     title: "Logout Successfully ",
                     icon: "success",
                     draggable: true
                   });
      })
      navigate('/login')
      .catch(error => {
        alert(error)
      })
  }
  const withUser = <>
    <li><NavLink to='/Recommendations-For-Me'>Recommendations For Me</NavLink></li>
    <li><NavLink to='/my-queries'>My Queries</NavLink></li>
    <li><NavLink to='/My-recommendations'>My recommendations</NavLink></li>

  </>

  const mainList = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/queries'>Queries</NavLink></li>
  </>
  return (
    <div className="relative z-20">
      <div className="navbar fixed top-0  bg-[#EF4444] text-white md:px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn  btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#EF4444] z-20 rounded-box mt-3 w-52 p-2 shadow">
              {mainList}

              {user?.email && withUser}

            </ul>
          </div>
          <div className="flex items-center gap-2">
          <img className="mx-auto  my-2" src="https://img.icons8.com/?size=40&id=57SgDS4Ys9MV&format=png&color=FFFFFF" alt="" />
            <a className="text-2xl font-bold">Quora </a>
          
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1 ">
            {mainList}

            {user?.email && withUser}



          </ul>
        </div>
        <div className="navbar-end gap-2">
          {
            user?.photoURL ? <img
              className='w-[50px] h-[50px] z-40 rounded-full'
              src={user?.photoURL}
              alt=""
              data-tooltip-id="my-tooltip" data-tooltip-content={`${user?.displayName}`}


            /> : <CgProfile color='white' size={40} />

          }

          <Tooltip className='z-40' id="my-tooltip" />
          {user?.email && <button className="py-2 px-4 rounded-sm  font-semibold border-white border-[1px] text-white" onClick={handleLogOut}>logOut</button>}
          {!user && <NavLink to='/login'><button className="py-2 px-4 rounded-sm  font-semibold border-[1px] border-white text-white">Log-in</button></NavLink>}
          

        </div>
      </div>
    </div>
  );
};

export default Navbar;
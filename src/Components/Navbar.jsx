import React from 'react'
import Wrapper from './Wrapper'
import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <Wrapper>
      <div className='justify-between items-center flex h-[15vh]'>
        {/* Logo */}
        <div className='flex gap-2 '>
        {/* <img src={Logo} alt="logo" className='md:h-10'/> */}
        <h1 className=' text-[4vh] font-montserrat  font-bold  relative'>
        <span class="text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text">
      E-WFL
    </span>
        </h1>
        </div>
        

        {/* Desktop Menu */}
        <div className='md:flex hidden justify-between items-center gap-[10vh]'>
        <nav>
          <ul className="hidden md:flex gap-10 justify-center items-center">
            <li
              className="font-semibold font-montserrat  hover:text-blue-400 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <a>Home</a>
            </li>
            <li
              className="font-semibold font-montserrat  hover:text-blue-400 cursor-pointer"
              onClick={()=>document.getElementById("about").scrollIntoView({behavior:"smooth"})}
            >
              <a>About</a>
            </li>
            <li
              className="font-semibold font-montserrat hover:text-blue-400 cursor-pointer"
              onClick={()=>document.getElementById("contact").scrollIntoView({behavior:"smooth"})}
            >
              <a>Education</a>
            </li>
            <li
              className="font-semibold font-montserrat hover:text-blue-400 cursor-pointer"
              onClick={()=>document.getElementById("contact").scrollIntoView({behavior:"smooth"})}
            >
              <a>Contact</a>
            </li>
          </ul>
        </nav>

        <button
              className="shadow-3xl font-medium font-poppins px-4 py-2 bg-[#222222] rounded-md hover:bg-blue-400 hover:text-black transition-transform"
              // onClick={() => navigate("/login")}
            >
              Login
            </button>
        </div>

        {/* Mobile Menu */}
        <div className='md:hidden'>Mobile Menu</div>
      </div>
    </Wrapper>
  )
}

export default Navbar
import React from 'react'
import Wrapper from './Wrapper'
import Logo from "../assets/echakra.png";
import gsap from 'gsap';
import { useState } from 'react';
import {useContext } from 'react';
import Context from '../context/Context';
import { useNavigate } from 'react-router-dom';
import { BiCoinStack } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { useEffect } from 'react';
const Navbar = () => {

  const {isdark , setisdark , setislogin , Location} = useContext(Context)
  
  const navigate = useNavigate();
  const body = document.body;

  const modetoggle=()=>{
    if(body.classList.contains("light")){
      body.classList.remove("light");
      setisdark(!isdark)
    }
    else{
      body.classList.add("light");
      setisdark(!isdark)
    }
  }

  

  return (
    <div className='shadow-3xl '>
    <Wrapper>
      <div className='justify-between items-center flex h-[15vh]'>
        {/* Logo */}
        <div className='flex gap-2 cursor-pointer' onClick={()=>navigate('/')}>
        <img src={Logo} alt="logo" className='h-[20vh]'/>
        </div>
        
        {/* <div className='absolute bg-red-400 w-fit'></div> */}

        {/* Desktop Menu */}
        <div className='md:flex hidden relative justify-between items-center gap-[10vh]'>  
        <nav >
          <ul className="hidden md:flex gap-10 justify-center items-center ">
            <li
              className="font-semibold font-montserrat hover:text-[#01796f] cursor-pointer nav"
              onClick={() => navigate("/")}
            >
              <a>Home</a>
            </li>
            <li
              className="font-semibold font-montserrat  hover:text-[#01796f] cursor-pointer nav"
              onClick={()=>document.getElementById("about").scrollIntoView({behavior:"smooth"})}
              
            >
              <a>About</a>
            </li>
            <li
              className="font-semibold font-montserrat hover:text-[#01796f] cursor-pointer nav"
              onClick={()=>document.getElementById("contact").scrollIntoView({behavior:"smooth"})}
              
            >
              <a>Education</a>
            </li>
            <li
              className="font-semibold font-montserrat hover:text-[#01796f] cursor-pointer nav"
              onClick={()=>document.getElementById("contact").scrollIntoView({behavior:"smooth"})}
              
            >
              <a>Contact</a>
            </li>
          </ul>
        </nav>
        {
          !isdark ? (<button
            className="shadow-5xl font-medium font-poppins hover:text-[#01796f] transition-transform nav"
            onClick={()=>{modetoggle()}}
          >
            <i class="fi fi-sr-moon-stars group"></i>
          </button>) : (<button
              className="shadow-5xl font-medium font-poppins hover:text-[#01796f] transition-transform nav"
              onClick={()=>{modetoggle()}}
            >
              <i class="fi fi-br-brightness"></i>
            </button>)
        }
        
        </div>
        <div className='md:flex hidden gap-[5vh] items-center'>
          {!Location ? (<h1 className=' font-montserrat font-bold text-red-400 flex items-center gap-[1vh]'><i class="fi fi-rr-marker"></i>Location</h1>) : (<h1 className=' font-montserrat font-bold text-red-400 flex items-center gap-[1vh]'><i class="fi fi-rr-marker"></i>{Location}</h1>)}
          
        {!sessionStorage.getItem("user") ? (<div className='md:flex hidden gap-[5vh]'>
        <button
              className="shadow-3xl font-medium border-2 font-poppins px-4 py-2 bg-[#222222] rounded-md hover:bg-[#01796f]  transition-transform nav"
              onClick={() => {setislogin(true);
                navigate("/login")}}
            >
              Login
            </button>
        </div>) :(
          <div className='md:flex hidden gap-[2vh]'>
            <button
              className="shadow-5xl font-medium font-poppins hover:text-[#01796f] transition-transform nav"
              onClick={()=>{navigate('/cart')}}
            >
              <i class="fi fi-rr-shopping-cart"></i>
            </button>
            <button className=' font-medium  font-poppins px-4 py-2 bg-[#222222] rounded-md hover:bg-[#01796f]  transition-transform nav' onClick={()=>{navigate("/profile")}}><i class="fi fi-sr-user"></i></button>
            <div className='flex w-fit h-fit justify-center items-center p-2 rounded-lg border-2'>
              <h1>500</h1>
              <BiCoinStack/>
            </div>
          </div>
        )}
        </div>

        {/* Mobile Menu */}
        <div className='md:hidden flex items-center gap-[5vh]'>
        {
          !isdark ? (<button
            className="shadow-5xl font-medium font-poppins hover:text-[#01796f] transition-transform nav"
            onClick={()=>{modetoggle()}}
          >
            <i class="fi fi-sr-moon-stars group"></i>
          </button>) : (<button
              className="shadow-5xl font-medium font-poppins hover:text-[#01796f] transition-transform nav"
              onClick={()=>{modetoggle()}}
            >
              <i class="fi fi-br-brightness"></i>
            </button>)
        }
          <button className=' font-medium font-poppins hover:text-[#01796f] transition-transform'>
          <i class="fi fi-br-menu-burger text-xl"></i>
          </button>
        </div>
      </div>
    </Wrapper>
    </div>
  )
}

export default Navbar
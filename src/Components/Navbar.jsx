import React from 'react'
import Wrapper from './Wrapper'
import Logo from "../assets/echakra.png";
import gsap from 'gsap';
import mapboxgl from 'mapbox-gl';
import { useState } from 'react';
import {useContext } from 'react';
import Context from '../context/Context';
import { useNavigate } from 'react-router-dom';
import { BiCoinStack } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { useEffect } from 'react';
const Navbar = () => {

  const {isdark , setisdark , setislogin} = useContext(Context)
  const [Location, setLocation] = useState(null)
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

  // ALgorith for Location fetching

  const ReverseGeocodeaddress = async (lat , log) => {
    mapboxgl.accessToken =
    "pk.eyJ1IjoibmlzaGFudDc0MTIiLCJhIjoiY2xtYm42NHI5MWN0ZTNkbzVsdzhkNnl0bSJ9.FXHqQifsNwqwWW3g4qEZgw";

  // Construct the API URL with separate lat and lon parameters
  const geocodingApiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${log},${lat}.json?access_token=${mapboxgl.accessToken}`;

  try {
    const response = await fetch(geocodingApiUrl);
    if (response.ok) {
      const data = await response.json();
      if (data.features && data.features.length > 0) {
        const city = data.features[0].context.find(
          (context) => context.id.startsWith("place.")
        );
        if (city) {
          console.log("City:", city.text);
          setLocation(city.text);
        } else {
          console.error("City not found in context.");
        }
      } else {
        console.error("No results found.");
      }
    } else {
      console.error("Error:", response.status, response.statusText);
    }
  } catch (error) {
    console.error("Error:", error);
  }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(longitude , latitude)
      ReverseGeocodeaddress(latitude , longitude);
    });  
  }, [])

  return (
    <div className='shadow-3xl '>
    <Wrapper>
      <div className='justify-between items-center flex h-[15vh]'>
        {/* Logo */}
        <div className='flex gap-2 '>
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
          {!Location ? (<h1 className=' font-montserrat font-bold text-[#01796f] flex items-center gap-[1vh]'><i class="fi fi-rr-marker"></i>Location</h1>) : (<h1 className=' font-montserrat font-bold text-[#01796f] flex items-center gap-[1vh]'><i class="fi fi-rr-marker"></i>{Location}</h1>)}
          
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
            <button className='shadow-3xl font-medium border-2 font-poppins px-4 py-2 bg-[#222222] rounded-md hover:bg-[#01796f]  transition-transform nav'><i class="fi fi-sr-user"></i></button>
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
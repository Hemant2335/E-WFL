import React from "react";
import Wrapper from "./Wrapper";
import Logo from "../assets/echakra.png";
import { CiSearch } from "react-icons/ci";
import { AiOutlineHeart } from "react-icons/ai";
import { BsHandbag} from "react-icons/bs";

const Newnavbar = () => {
  return (
    
    <div className="min-h-[13vh] flex items-center border-b-2 ">
      <Wrapper>
      <Wrapper>
        <div className="flex items-center justify-between">
            {/* Logo */}
            
            <div className='flex gap-2 '>
        <img src={Logo} alt="logo" className='h-[15vh]'/>
        </div>

            {/* Search */}

            <div className="bg-gray-200 w-[40vw] items-center gap-2 flex px-4 py-3 rounded-2xl min-h-[5vh]">
                <CiSearch/>
                <input type="text" className="bg-gray-200 font-poppins focus:border-none focus:outline-none" 
                placeholder="Search"/>
            </div>

            {/* Buttons */}

            <div className="flex gap-4">
                <button className="text-md font-poppins font-medium border-2 p-3 rounded-3xl">Sign up</button>
                <button className="text-md font-poppins font-medium">Login</button>
                <div className="flex items-center text-xl gap-4">
                <button><AiOutlineHeart/></button>
                <button><BsHandbag/></button>
            </div>
            </div>


            {/* Icons */}

            

          </div>
      </Wrapper>
      </Wrapper>
    </div>
    
  );
};

export default Newnavbar;

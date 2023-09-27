import React from "react";
import Logo from "../assets/echakra.png";

const Footer = () => {
  return (
    <div>
      <div className="h-fit w-full mt-[20vh] md:flex flex-col justify-center shadow-3xl  p-5">
        <div>
          <h1 className="font-semibold font-montserrat text-xl text-[#FEFBE5] text-left">
            You can help <br /> Shape the Future
          </h1>
        </div>

        <div className="mt-5 md:flex justify-between items-center">
          <div className="flex gap-2 ">
            <img src={Logo} alt="logo" className="h-[15vh]" />
          </div>

          <div>
          <ul className="flex gap-2">
            <li
              className="font-semibold font-montserrat  hover:text-[#ff5757] cursor-pointer"
              onClick={() => navigate("/")}
            >
              <a>Home |</a>
            </li>
            <li
              className="font-semibold font-montserrat  hover:text-[#ff5757] cursor-pointer"
              onClick={()=>document.getElementById("about").scrollIntoView({behavior:"smooth"})}
            >
              <a>About |</a>
            </li>
            <li
              className="font-semibold font-montserrat hover:text-[#ff5757] cursor-pointer"
              onClick={()=>document.getElementById("contact").scrollIntoView({behavior:"smooth"})}
            >
              <a>Education |</a>
            </li>
            <li
              className="font-semibold font-montserrat hover:text-[#ff5757] cursor-pointer"
              onClick={()=>document.getElementById("contact").scrollIntoView({behavior:"smooth"})}
            >
              <a>Contact</a>
            </li>
          </ul>
          </div>
        </div>
        <div className="flex  items-center justify-center mt-5">
          <h1 className="flex justify-center text-xl text-left   font-montserrat font-semibold gap-2">
            Created by<span className="font-bold text-xl  font-montserrat text-[#ff5757]">Echakran</span>team
          </h1>
          </div>
      </div>
    </div>
  );
};

export default Footer;

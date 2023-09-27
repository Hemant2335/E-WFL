import React from "react";
import Wrapper from "./Wrapper";
import Logo from "../assets/echakra.png";
import company from "../assets/buildings.png";
import user from "../assets/programmer.png";
import laptop from "../assets/laptop.png";
import recycling from "../assets/recycling.png";

const Prodedure = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Wrapper>
      <div className=" flex flex-col  justify-center items-center mt-[20vh] relative">
        <h1 className="mb-[10vh] font-montserrat font-bold text-2xl">
          How we Work
        </h1>
        <div className="flex flex-col  gap-5 md:flex-row  w-full justify-between items-center  relative ">
          <div className="shadow-3xl z-10  w-full bg-[#01796f] md:w-[20vw] h-fit p-4 flex justify-center items-center rounded-xl font-montserrat font-bold">
            <img src={user} alt="logo" className="h-[10vh]" />
          </div>
          <div className="md:w-[20vw]  h-fit p-4 flex justify-center items-center rounded-xl font-montserrat font-bold">
            <img src={laptop} alt="logo" className="h-[8vh] z-10 md:h-[10vh]" />
          </div>
          <div className="z-10 shadow-3xl bg-green-400 w-full md:w-[20vw] h-fit md:p-2 p-4 flex justify-center items-center rounded-xl font-montserrat font-bold">
            <img src={Logo} alt="logo" className="h-[10vh] " />
          </div>
          <div className="md:w-[20vw] z-10  w-full spin h-fit p-4 flex justify-center items-center rounded-xl font-montserrat font-bold">
            <img src={recycling} alt="logo" className="h-[8vh] z-10 md:h-[10vh]" />
          </div>
          <div className=" shadow-3xl w-full z-10 bg-[#01796f] md:w-[20vw] h-fit p-4 flex justify-center items-center rounded-xl font-montserrat font-bold ">
            <img src={company} alt="logo" className="h-[10vh] z-10" />
          </div>
        </div>
        <div className="absolute top-[6vh] left-0 hidden md:flex line">
          <svg width="100vw" height="200">
            <line
              x1="0" // X-coordinate of the starting point
              y1="100" // Y-coordinate of the starting point
              x2="80vw" // X-coordinate of the ending point
              y2="100" // Y-coordinate of the ending point
              stroke="#01796f" // Stroke color
              strokeWidth="5" // Stroke width
              radius="100"
            />
          </svg>
        </div>
        
      </div>
      <div className="flex justify-center">
      <p className="mt-[10vh] md:w-[60vw] text-center font-montserrat font-semibold">We're the link between e-waste recycling companies and eco-conscious consumers. Our platform connects clients with trusted recycling partners, streamlining the recycling process and offering rewards for sustainable choices.</p>
      </div>
    </Wrapper>
  );
};

export default Prodedure;

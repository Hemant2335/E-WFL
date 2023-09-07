import React from "react";
import Wrapper from "./Wrapper";
import Logo from "../assets/nLogo.png";
import company from "../assets/buildings.png";
import user from "../assets/programmer.png";
import laptop from "../assets/laptop.png";
import recycling from "../assets/recycling.png";

const Prodedure = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Wrapper>
      <div className=" flex flex-col  justify-center items-center mt-[20vh]">
        <h1 className="mb-[10vh] font-montserrat font-bold text-xl">How we Work</h1>
      <div className="flex flex-col gap-5 md:flex-row  w-full justify-between items-center  relative ">
        <div className="shadow-3xl  w-full md:w-[20vw] h-fit p-4 flex justify-center items-center rounded-xl font-montserrat font-bold card">
          <img src={user} alt="logo" className="h-[10vh]" />
        </div>
        <div className="md:w-[20vw]  h-fit p-4 flex justify-center items-center rounded-xl font-montserrat font-bold">
          <img src={laptop} alt="logo" className="h-[8vh] md:h-[10vh]" />
        </div>
        <div className="z-10 shadow-3xl w-full md:w-[20vw] h-fit md:p-2 p-4 flex justify-center items-center rounded-xl font-montserrat font-bold card">
          <img src={Logo} alt="logo" className="h-[10vh]" />
        </div>
        <div className="md:w-[20vw] w-full spin h-fit p-4 flex justify-center items-center rounded-xl font-montserrat font-bold">
          <img src={recycling} alt="logo" className="h-[8vh] md:h-[10vh]" />
        </div>
        <div className=" shadow-3xl w-full md:w-[20vw] h-fit p-4 flex justify-center items-center rounded-xl font-montserrat font-bold card">
          <img src={company} alt="logo" className="h-[10vh]" />
        </div>
      </div>
      </div>
    </Wrapper>
  );
};

export default Prodedure;

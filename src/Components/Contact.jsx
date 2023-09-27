import React from "react";
import Wrapper from "./Wrapper";

const Contact = () => {
  return (
    <div id="contact">
      <div className="flex flex-col  justify-center items-center mt-[20vh]">
        <h1 className="mb-[10vh] font-montserrat font-bold text-2xl">
          Contact Us
        </h1>
        <div className="w-fit h-fit bg-[#343434] shadow-3xl rounded-xl  p-[5vh] md:ml-5 mb-10 z-10 searchtext card">
          <h1 className="md:text-[5vh] text-[8vh] font-montserrat  font-bold">
            Contact our Team
          </h1>
          <p className=" text-gray-400 text-lg font-montserrat font-medium">
            Fill up the Details given below and click on the submit
          </p>

          <div className="mt-10 flex flex-col gap-5">
            <div className="md:flex  md:gap-5">
              <div className="relative">
                <p className="font-montserrat font-semibold ">
                  Email
                </p>
                <input
                  type="email"
                  className="w-full mt-2 rounded-lg  p-4 font-montserrat border-2 font-medium bg-[#222222]"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Enter Your Email"
                />
              </div>
              {/* Dropdown state */}
              <div className="relative">
                <p className="font-poppins font-semibold md:mt-0 mt-5 ">
                  Name
                </p>
                <input
                  type="text"
                  className="w-full mt-2 rounded-lg text-[#F9F6EE] p-4 font-montserrat border-2 font-medium bg-[#222222]"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="Enter Your Name"
                />
              </div>
            </div>
            <div className="relative">
                <p className="font-poppins font-semibold md:mt-0 mt-5 ">
                  Description
                </p>
                <input
                  type="text"
                  className="w-full mt-2 rounded-lg text-[#F9F6EE] p-4 font-montserrat border-2 font-medium bg-[#222222]"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="Enter Your Name"
                />
              </div>
            <button
              className="hover:bg-[#01796f] mt-[2vh] hover:scale-105 shadow-3xl transition-transform  font-montserrat font-semibold p-4 rounded-lg  w-fit"
              onClick={() => register()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

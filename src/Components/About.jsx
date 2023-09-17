import React, { useEffect } from "react";
import reward from "../assets/About_Comp/Reward.png";
import bestprice from "../assets/About_Comp/best-price.png";
import pricecomp from "../assets/About_Comp/prices_comp.png";
import education from "../assets/About_Comp/education.png";
import gsap from "gsap";

const About = () => {

  const fadeDuration = 1; // Fade duration in seconds

  useEffect(() => {
    // Fade in the component
    gsap.fromTo(
      "#searchposter",
      { opacity: 0 },
      {
        opacity: 1,
        duration: fadeDuration,
        ease: "Power3.easeInOut", // Optional easing function
      }
    );

    // Add cleanup when the component unmounts
    return () => {
      // Fade out the component
      gsap.fromTo(
        "#searchposter",
        { opacity: 1 },
        {
          opacity: 0,
          duration: fadeDuration,
          ease: "Power3.easeInOut", // Optional easing function
        }
      );
    };
  }, []);


  return (
    <div className="z-10 flex flex-col gap-10 md:px-[20vh] px-2 mt-[15vh]" id="about">
      <h1 className="mb-[10vh] font-montserrat font-bold text-2xl text-center">
          About Us 
        </h1>
      <div id="searchposter" className="flex md:flex-row flex-col gap-10 md:justify-between">
        <div  className="md:max-w-[27vw] w-fit min-h-[30vh] rounded-lg shadow-3xl bg-[#222222] card">
          <div className="flex justify-center mt-2 ">
            <img
              src={bestprice}
              alt="thunder"
              className="h-[7vh] p-2 shadow-3xl bg-[#1A1A1A]"
            />
          </div>
          <h1 className="text-xl font-montserrat font-medium text-center mt-5">
            Best Price
          </h1>
          <p className="py-4 px-6 text-md font-montserrat text-gray-400">
          Determine the value of your e-waste items effortlessly using our "Best Price" feature. By inputting item details, such as make and condition, you'll receive an accurate estimate before recycling. We take pride in offering competitive rates, ensuring you get the highest return for your electronics
          </p>
        </div>
        <div   className="md:max-w-[27vw] w-fit min-h-[30vh] rounded-lg shadow-3xl bg-[#222222] card">
          <div className="flex justify-center mt-2 ">
            <img
              src={education}
              alt="thunder"
              className="h-[7vh] p-2 shadow-3xl bg-[#1A1A1A]"
            />
          </div>
          <h1 className="text-xl font-montserrat font-medium text-center mt-5">
            Education
          </h1>
          <p className="py-4 px-6 text-md font-montserrat text-gray-400">
            {" "}
            Explore our extensive "Education" section to gain insights into responsible e-waste disposal. We provide comprehensive resources, including articles and guides, to help you understand the environmental impact of e-waste and the importance of recycling.
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-10 md:justify-between">
        <div  className="md:max-w-[27vw] w-fit min-h-[30vh] rounded-lg shadow-3xl bg-[#222222] card">
          <div className="flex justify-center mt-2 ">
            <img
              src={pricecomp}
              alt="thunder"
              className="h-[7vh] p-2 shadow-3xl bg-[#1A1A1A]"
            />
          </div>
          <h1 className="text-xl font-montserrat font-medium text-center mt-5">
            Price Comparison Tool
          </h1>
          <p className="py-4 px-6 text-md font-montserrat text-gray-400">
            {" "}
            Make well-informed recycling decisions with our "Price Comparison Tool." Easily compare our competitive recycling rates with local competitors to ensure transparency and select the most financially advantageous recycling option. 
          </p>
        </div>
        <div  className="md:max-w-[27vw] w-fit min-h-[30vh] rounded-lg shadow-3xl bg-[#222222] card">
          <div className="flex justify-center mt-2 ">
            <img
              src={reward}
              alt="thunder"
              className="h-[7vh] p-2 shadow-3xl bg-[#1A1A1A]"
            />
          </div>
          <h1 className="text-xl font-montserrat font-medium text-center mt-5">
            Rewards 
          </h1>
          <p className="py-4 px-6 text-md font-montserrat text-gray-400">
            {" "}
            Participate in our "Rewards" program and earn points, bonuses, and rewards with every recycling effort. These rewards can be redeemed for valuable items, discounts, or gift cards, offering tangible benefits for your eco-friendly actions. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

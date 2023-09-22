import React, { useEffect, useState , useContext } from "react";
import Context from "../context/Context";
import gsap from 'gsap';
import Facilites from "./Facilites";
import Loading from "./Loading";
import poster from "../assets/postergif.gif";
import posterlight from "../assets/Posterlightgif.gif";
import bgdark from "../assets/homebg.png";
import bg from "../assets/homebglight.png";
import map from "../assets/popupmock.webp";
import { useNavigate } from "react-router-dom";

const Poster = () => {

  const {isdark} = useContext(Context)
  const [isLoading, setisLoading] = useState(false);
  const [city, setcity] = useState("");
  const [isdowncity, setisdowncity] = useState(false);
  const [isdownstate, setisdownstate] = useState(false);
  const [state, setstate] = useState("");
  const [fetcheddata, setfetcheddata] = useState([])
  const [state1, setstate1] = useState([])

  // const handleMouseEnter = () => {
  //   gsap.to(".postercard", {
  //     duration: 0.3,
  //     scale: 0.95, // Scale down a bit on hover
  //     transformOrigin: "center bottom",
  //     rotateX: -10, // Rotate around the X-axis to create a 3D effect
  //     ease: "power3.out",
  //   });
  // };
  
  // const handleMouseLeave = () => {
  //   gsap.to(".postercard", {
  //     duration: 0.3,
  //     scale: 1,
  //     rotateX: 0, // Reset the rotation
  //     ease: "power3.out",
  //   });
  // };

  const toogledropcity = () => {
    setisdowncity(!isdowncity);
  };
  const toogledropstate = () => {
    setisdownstate(!isdownstate);
  };

  const fetchaddress = async () => {
    setisLoading(true);
    const sendstate = state?.replace(/\s/g, "");
    console.log(sendstate);
    const res = await fetch(
      `https://ewfl-backend-hemant2335.vercel.app/ewaste/${sendstate}/city/${city}`
    );
    const data = await res.json();
    setfetcheddata(data?.data);
    setisLoading(false);
    fetcheddata?.map((item) => {
      console.log(item);
    })
  };

  const fetchcitystate = async () => {
    setisLoading(true);
    const res = await fetch("https://ewfl-backend-hemant2335.vercel.app/ewaste");
    const data = await res.json();
    console.log(data)
    setstate1(data);
    setisLoading(false);
  }

  useEffect(() => {
    fetchcitystate();  
  }, [])

  const changestate = (city) => {
    const matchingStateItem = state1.find((item) => {
      const foundCity = item?.cities?.find((cityItem) => city === cityItem);
      return foundCity !== undefined;
    });

    if(matchingStateItem){
      console.log(matchingStateItem.state)
      setstate(matchingStateItem.state);
    }
    else{
      console.log("not found");
    }
  }

  const fadeDuration = 1.5; // Duration of fade-in/fade-out animation in seconds

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
    <div>
      {isLoading ? <Loading /> : ""}
      <div
        className="flex relative rounded-lg  pt-[2vh] mt-[5vh] gap-10 justify-center items-center md:max-h-[70vh] "
        id="searchposter"
        style={{backgroundImage : `url(${isdark ? (bgdark) : (bg)})` , backgroundSize : "cover"}}
      >
        {/* <div className="hidden absolute opacity-20 top-0 md:flex w-full max-h-[75vh] ">
          <img
            src={map}
            alt="MAP"
            className="max-h-[100vh] w-full object-cover rounded-xl"
          />
        </div> */}
        <div  className="postercard w-full h-fit  mt-[5vh] shadow-3xl rounded-xl p-[3vh]  other md:ml-5 mb-10 z-10 searchtext ">
          <h1 className="md:text-[5vh] text-[5vh] font-montserrat  font-bold">
            Welcome To Echakran
          </h1>
          <p className=" text-gray-400 text-lg font-montserrat font-medium">
            
          </p>

          <div className="mt-10 flex flex-col gap-5">
            <div className="md:flex  md:gap-5">
              {/* <div className="relative">
                <p className="font-montserrat font-semibold ">
                  City/district
                </p>
                <input
                  type="text"
                  className="w-full mt-2 rounded-lg text-[#F9F6EE] p-4 font-montserrat border-2 font-medium bg-[#222222]"
                  onClick={() => {
                    toogledropcity();
                  }}
                  value={city}
                  placeholder="Select City/district"
                /> */}
                {/* {!isdowncity ? (
                  ""
                ) : (
                  <div className="absolute z-10 w-full bg-[#222222] p-4 rounded-lg h-[20vh] overflow-auto">
                    {state1?.map((item) =>
                      item?.cities?.map((city, index) => (
                        <h1
                          className="font-medium rounded-md p-2 text-white font-montserrat cursor-pointer hover:bg-[#ff5757]"
                          key={index}
                          onClick={() => { 44
                            setcity(city);
                            toogledropcity();
                            changestate(city);
                          }}
                        >
                          {city}
                        </h1>
                      ))
                    )}
                  </div>
                )} */}
              {/* </div> */}
              {/* Dropdown state */}
              {/* <div className="relative">
                <p className="font-poppins font-semibold md:mt-0 mt-5 ">
                  State
                </p>
                <input
                  type="text"
                  className="w-full mt-2 rounded-lg text-[#F9F6EE] p-4 font-montserrat border-2 font-medium bg-[#222222]"
                  onClick={() => {
                    toogledropstate();
                  }}
                  value={state}
                  placeholder="Select state"
                />
              </div> */}
            </div>
            
            
            <button
              className="hover:bg-[#01796f] hover:scale-105 shadow-3xl transition-transform  font-montserrat font-semibold p-4 rounded-lg  w-fit"
              // onClick={() => {city ? navigate(`/search/${state}/${city}`) : (alert("Please select a city"))}}
              onClick={() => {city ? fetchaddress() : (alert("Please select a city"))}}
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="hidden md:flex w-full justify-center ">
          
          <img
            src={isdark ? (poster) : (posterlight)}
            alt=""
            className="h-[78vh] bg-cover bg-center "
          />
        </div>
      </div>
      {fetcheddata.length > 0 && <Facilites data={fetcheddata}/>}
    </div>
    
  );
};

export default Poster;

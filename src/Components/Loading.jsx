import lottie from "lottie-web";
import animationdata from "../assets/Loding.json";
import { useEffect } from "react";

import React from 'react'

const Loading = () => {
    useEffect(() => {

        // Initialize the animation when the component mounts
        const animationContainer = document.getElementById('lottie-animation');
        if (animationContainer) {
          lottie.loadAnimation({
            container: animationContainer,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationdata,
          });
        }
      }, []);
  
  return (
    <div className=" absolute flex h-screen w-screen top-0 z-50 left-0 justify-center items-center  bg-[rgba(34,34,34,0.5)]">
        <div className="loading" id="lottie-animation" style={{height : "25vh" , width : "200px"}}></div>
    </div>
  )
}

export default Loading
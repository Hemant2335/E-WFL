import React from 'react'
import abstract from "../assets/wave-haikei.svg";

const Background = () => {
  return (
    <div className=" absolute flex h-screen w-screen top-0  left-0 justify-center items-center " style={{backgroundImage : `url(${abstract})`}}>
    </div>
  )
}

export default Background
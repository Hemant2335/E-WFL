import React from 'react'
import image from "../assets/laptop.png";

const Cartcard = () => {
  return (
    <div className='p-4 max-h-[20vh] shadow-3xl rounded-xl flex gap-[5vh] '>
        <div className="max-w-[10vh] h-fit flex z-10">
              <img src={image} alt="" className=" object-cover rounded-xl " />
        </div>
        <div>
            <h1 className=' font-montserrat font-bold'> Product Name</h1>
            <h2 className='font-montserrat font-bold text-[#01796f]'>Est Price : $500</h2>
        </div>
    </div>
  )
}

export default Cartcard
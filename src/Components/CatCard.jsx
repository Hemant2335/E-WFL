import React from 'react'

const CatCard = ({image , name}) => {
  return (
    <div className='md:max-w-[20vw]  shadow-3xl p-4 rounded-xl flex flex-col gap-[2vh] cursor-pointer hover:scale-105 transition-transform hover:bg-[#01796f]'>
        <div className="w-full max-h-[25vh] flex z-10">
              <img src={image} alt="" className=" object-cover rounded-xl " />
        </div>
        <h1 className='text-md font-montserrat font-bold'>{name}</h1>
    </div>
  )
}

export default CatCard
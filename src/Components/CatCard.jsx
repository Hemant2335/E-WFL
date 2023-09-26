import React from 'react'
import { useNavigate } from 'react-router-dom'

const CatCard = ({image , name , link}) => {

  const navigate = useNavigate()

  return (
    <div className='md:max-w-[20vw]  shadow-3xl p-4 rounded-xl flex flex-col gap-[2vh] cursor-pointer hover:scale-105 transition-transform hover:bg-[#01796f]' onClick={()=>{navigate(link)}}>
        <div className="w-full max-h-[25vh] flex z-10">
              <img src={image} alt="" className=" object-cover rounded-xl " />
        </div>
        <h1 className='text-md font-montserrat font-bold'>{name}</h1>
        {(link == "#") ? (
          <button
          className="shadow-3xl font-medium border-2 font-poppins px-4 py-2 bg-[#222222] rounded-md hover:bg-red-400  transition-transform nav"
          onClick={() => {setislogin(true);
            navigate("/login")}}
        >
          Add to cart
        </button>
        ) : ("")}
    </div>
  )
}

export default CatCard
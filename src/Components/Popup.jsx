import React, { useContext } from 'react'
import eduposter from "../assets/popupmock.webp";
import Context from "../context/Context";

const Popup = () => {

    const {setispopup} = useContext(Context)
    
  return (
    <div className="flex h-full fixed w-screen top-0 z-50 left-0 justify-center items-center  bg-[rgba(34,34,34,0.5)]">
        <div className='relative p-[7vh]'>
        <div>
            <button className='absolute p-2 rounded-md top-0 right-0 hover:text-[#ff5757]' onClick={()=>{setispopup(false)}}><i class="fi fi-br-cross"></i></button>
        </div>
        <div className='bg-[#222222] md:w-[40vw] shadow-3xl rounded-md'>
            <div className=''>
                <img src={eduposter} alt="" className='rounded-md'/>
            </div>
            <div className='p-2'>
                <h1 className='text-xl font-bold font-montserrat'>Facts for you</h1>
                <p>E-waste education empowers you to make eco-friendly choices." – Knowledge about e-waste empowers individuals to make environmentally conscious decisions</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Popup
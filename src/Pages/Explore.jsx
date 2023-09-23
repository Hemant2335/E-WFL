import React from 'react'
import { Wrapper } from '../Components'


const category = [{
    name: "Information And Communication Equipment: ICT",
    image : "../assets/Ewaste_Category/ICT.jpg",
    items : ["Personal computers", "Laptops" , "Monitors" , "Keyboards" , "Printers" , "TV sets" , "Video cameras" , ]
}]

const Explore = () => {
  return (
    <Wrapper>
        <h1 className="mt-[5vh] font-montserrat font-bold text-2xl ">
          Select Your Category
        </h1>
        <div className='mt-[5vh]'></div>
    </Wrapper>
  )
}

export default Explore
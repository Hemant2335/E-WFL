import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Facilites = ({ data , handleSearch}) => {

    const navigate = useNavigate();

    useEffect(() => {
      
      console.log(data)
    }, [data])

  return (
    <div>
      <div className="w-full h-fit mt-[10vh]">
        <h1 className="mb-[10vh] font-montserrat font-bold text-2xl ">
          Search Results
        </h1>
        <div className="flex flex-col md:flex-row gap-4">
        {data?.map((item) => (
            <div className="h-fit items-center gap-[2vw] shadow-3xl p-4 rounded-lg bg-[#ff5757] md:max-w-[60vh]">
              <p className="font-montserrat font-semibold ">{item?.Name_Address}</p>
              <h2 className="font-montserrat font-bold mt-2 ">Capacity : {item?.Installed_Capacity_Metric_Tons_per_Annum_MTA}</h2>
              <button
              className="hover:bg-[#ff5757] mt-[2vh] hover:scale-105 shadow-3xl transition-transform  font-montserrat font-semibold p-2 rounded-lg  w-fit"
              onClick={()=>{handleSearch}}
            >
              Go
            </button>
            </div>))}
        </div>
      </div>
    </div>
  );
};

export default Facilites;

import React, { useEffect  ,useState} from 'react'
import Wrapper from './Wrapper';
import Loading from './Loading';
import poster from "../assets/postergif.gif";
import map from "../assets/MAP.jpg";

const Poster = () => {

    const [isLoading, setisLoading] = useState(true);

    useEffect(() => { 
        setTimeout(() => {
            setisLoading(false);
        }, 2000);
     }, []) 

  return (
<Wrapper>
      {isLoading ? (<Loading/>) : ("")}
      <div className="flex relative rounded-lg mt-[5vh] gap-10 items-center md:max-h-[70vh] " id='searchposter'>
      <div className="hidden absolute opacity-10 top-0 md:flex w-full max-h-[75vh] ">
          <img
            src={map}
            alt="MAP"
            className="max-h-[100vh] w-full object-cover rounded-xl"
          />
        </div>
        <div className="w-full h-fit bg-[#343434] rounded-xl  p-[5vh] md:ml-5 mb-10 z-10 searchtext">
          <h1 className="md:text-[5vh] text-[8vh] font-montserrat text-[#F9F6EE] font-bold">
            Search E-wate facilities
          </h1>
          <p className=" text-gray-400 text-lg font-montserrat font-medium">
            Fill up the Location and get the nearest E-waste facilities
          </p>

          <div className="mt-10 flex flex-col gap-5">
            <div className="md:flex  md:gap-5">
              <div>
                <p className="font-montserrat font-semibold text-[#F9F6EE]">
                  City
                </p>
                <input
                  type="text"
                  className="w-full mt-2 rounded-lg text-[#F9F6EE] p-4 font-montserrat border-2 font-medium bg-[#222222]"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  placeholder='Select City'
                />
              </div>
              <div>
                <p className="font-poppins font-semibold md:mt-0 mt-5 text-[#F9F6EE]">
                  State
                </p>
                <input
                  type="text"
                  className="w-full mt-2 rounded-lg p-4 text-[#F9F6EE] font-montserrat font-medium border-2 bg-[#222222]"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  placeholder='Select State'
                />
              </div>
            </div>
            <button
              className="bg-[#F9F6EE] hover:scale-105 transition-transform text-black font-montserrat font-semibold p-4 rounded-lg  w-fit"
              onClick={() => register()}
            >
              Search
            </button>
          </div>
        </div>
        <div className="hidden md:flex w-full justify-center ">
          <img
            src={poster}
            alt=""
            className="h-[78vh] bg-cover bg-center rounded-xl"
          />
        </div>
      </div>
    </Wrapper>
  )
}

export default Poster
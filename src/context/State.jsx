import Context from "./Context";
import { useState , useEffect} from "react";
import mapboxgl from 'mapbox-gl';

const State = (props) => {

    const [isdark, setisdark] = useState(true)
    const [isLoading, setisLoading] = useState(false)
    const [iscartupdated, setiscartupdated] = useState(false);
    const [ispopup, setispopup] = useState(false)
    const [islogin, setislogin] = useState(true);
    const [Location, setLocation] = useState("")
    const [Locationstate, setLocationstate] = useState("")
    const [User, setUser] = useState(null);
    const [facdata, setfacdata] = useState([])
    const [fetcheddata, setfetcheddata] = useState([])

    const [category, setcategory] = useState([]);
    const [subcategory, setsubcategory] = useState([]);
    const [Item, setItem] = useState([]);

    // To fetch the data for the category

    const fetchcategory = async() => {
      const res = await fetch('https://ewfl-backend-hemant2335.vercel.app/edevice/categories', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      
      const data = await res.json();
      console.log(data)
      setcategory(data);
    }

    // To fetch the user details
    const fetchuser= async() => {
      const res = await fetch(`https://ewfl-backend-hemant2335.vercel.app/user/${sessionStorage.getItem('user')}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      
      const data = await res.json();
      console.log(data?.user);
      setUser(data?.user);
    }

    // ALgorith for Location fetching

  const ReverseGeocodeaddress = async (lat , log) => {
    mapboxgl.accessToken =
    "pk.eyJ1IjoibmlzaGFudDc0MTIiLCJhIjoiY2xtYm42NHI5MWN0ZTNkbzVsdzhkNnl0bSJ9.FXHqQifsNwqwWW3g4qEZgw";

  // Construct the API URL with separate lat and lon parameters
  const geocodingApiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${log},${lat}.json?access_token=${mapboxgl.accessToken}`;

  try {
    const response = await fetch(geocodingApiUrl);
    if (response.ok) {
      const data = await response.json();
      if (data.features && data.features.length > 0) {
        const city = data.features[0].context.find(
          (context) => context.id.startsWith("place.")
        );
        const state =  data.features[0].context.find(
          (context) => context.id.startsWith("region.")
        );

        if (city) {
          console.log("City:", city.text);
          setLocation(city.text);
        } else {
          console.error("City not found in context.");
        }

        if (state) {
          console.log("State:", state.text);
          setLocationstate(state.text);
        } else {
          console.error("State not found in context.");
        }
      
      } else {
        console.error("No results found.");
      }
    } else {
      console.error("Error:", response.status, response.statusText);
    }
  } catch (error) {
    console.error("Error:", error);
  }
  };

  // To fetch the Ewaste Facility data
  const fetchcitystate = async () => {
    setisLoading(true);
    const res = await fetch("https://ewfl-backend-hemant2335.vercel.app/ewaste");
    const data = await res.json();
    console.log(data)
    setfacdata(data);
    setisLoading(false);
  }

  const fetchaddress = async () => {
    setisLoading(true);
    const sendstate = await Locationstate?.replace(/\s/g, "").toLowerCase();
    console.log(sendstate);
    const res = await fetch(
      `https://ewfl-backend-hemant2335.vercel.app/ewaste/${(sendstate)?(sendstate):("haryana")}`
    );
    const data = await res.json();
    setfetcheddata(data?.data?.[0]?.data);
    setisLoading(false);
    console.log("I am latest",data?.data?.[0]?.data)
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(longitude , latitude)
      ReverseGeocodeaddress(latitude , longitude);
    });  
  }, [])

  useEffect(() => {
    fetchuser( )
  }, [iscartupdated])

    useEffect(() => {
        fetchcitystate();
         fetchcategory();
         
         fetchaddress();
    }, [Locationstate])

  return (
    <Context.Provider value={{isdark,facdata,iscartupdated , setiscartupdated, fetcheddata,Locationstate , Location , setLocation , User , setUser , setisdark , ispopup , setispopup ,islogin, setislogin , category}}>
        {props.children}
    </Context.Provider>
  )
}

export default State
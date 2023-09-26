import Context from "./Context";
import { useState , useEffect} from "react";

const State = (props) => {

    const [isdark, setisdark] = useState(true)
    const [ispopup, setispopup] = useState(false)
    const [islogin, setislogin] = useState(true);

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

    // to fetch the data for the subcategory
    const fetchsubcategory = async() => {
      const res = await fetch('https://ewfl-backend-hemant2335.vercel.app/edevice/categories', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      
      const data = await res.json();
      setcategory(data?.category);
    }

    // to fetch the data for the Item
    const fetchItem= async() => {
      const res = await fetch('https://ewfl-backend-hemant2335.vercel.app/edevice/categories', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      
      const data = await res.json();
      
      setcategory(data?.category);
    }

    useEffect(() => {
         fetchcategory();
    }, [])

  return (
    <Context.Provider value={{isdark , setisdark , ispopup , setispopup ,islogin, setislogin , category}}>
        {props.children}
    </Context.Provider>
  )
}

export default State
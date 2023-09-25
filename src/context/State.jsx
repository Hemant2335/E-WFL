import Context from "./Context";
import { useState } from "react";

const State = (props) => {

    const [isdark, setisdark] = useState(true)
    const [ispopup, setispopup] = useState(false)
    const [islogin, setislogin] = useState(true);

  return (
    <Context.Provider value={{isdark , setisdark , ispopup , setispopup ,islogin, setislogin}}>
        {props.children}
    </Context.Provider>
  )
}

export default State
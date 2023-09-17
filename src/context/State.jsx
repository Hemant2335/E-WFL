import Context from "./Context";
import { useState } from "react";

const State = (props) => {

    const [isdark, setisdark] = useState(true)
    const [ispopup, setispopup] = useState(false)

  return (
    <Context.Provider value={{isdark , setisdark , ispopup , setispopup}}>
        {props.children}
    </Context.Provider>
  )
}

export default State
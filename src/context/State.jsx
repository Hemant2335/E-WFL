import Context from "./Context";
import { useState } from "react";

const State = (props) => {

    const [isdark, setisdark] = useState(true)

  return (
    <Context.Provider value={{isdark , setisdark}}>
        {props.children}
    </Context.Provider>
  )
}

export default State
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {Navbar, Footer} from "./Components" ;
import {Homepage} from "./Pages" ;

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
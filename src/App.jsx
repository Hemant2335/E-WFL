import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {Navbar, Footer} from "./Components" ;
import {Homepage , SearchMap} from "./Pages" ;
import State from './context/State';

const App = () => {
  return (
    <div>
      <State>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route exact path="/search/:state/:city" element={<SearchMap/>} />
        </Routes>
        <Footer/>
      </Router>
      </State>
    </div>
  )
}

export default App
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {Navbar, Footer} from "./Components" ;
import {Homepage , SearchMap ,Login , Explore , PricePred , SubExplore ,ItemExplore} from "./Pages" ;
import State from './context/State';

const App = () => {
  return (
    <div>
      <State>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route exact path="/search/:address" element={<SearchMap/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Login/>} />
          <Route exact path="/explore" element={<Explore/>} />
          <Route exact path="/explore/:category" element={<SubExplore/>} />
          <Route exact path="/explore/:category/:subcategory" element={<ItemExplore/>} />
          <Route exact path="/pricepredict" element={<PricePred/>} />
        </Routes>
        <Footer/>
      </Router>
      </State>
    </div>
  )
}

export default App
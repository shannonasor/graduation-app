import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import DaysTimer from './DaysTimer/DaysTimer';
import logo from '../../img/2022icon.png';
import './styles.css'


import DesktopLanding from './DesktopLanding';
import WellWishes from './WellWishes';
import PartyAccess from './PartyAccess';



function Desktop() {
    return (
        <div>
                  {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route path="/" element={<DesktopLanding/>} exact  />
            
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          <Route path="/wellwishes" element={<WellWishes/>} exact   />
            
          {/* This route is for contactus component
          with exact path "/contactus", in 
          component props we passes the imported component*/}
          <Route path="/partyaccess" element={<PartyAccess/>} exact   />
            
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
          {/* <Navigate to="/" /> */}
        </Routes>
      </Router>
                         {/*2022 Icon attribute*/}
                         {/* <a href="https://www.flaticon.com/free-icons/2022" title="2022 icons">2022 icons created by Vector Squad - Flaticon</a> */}
              

        </div>
    )
}

export default Desktop;
import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import './styles.css'


import TabletMobileLanding from './TabletMobileLanding';
import TabletMobileWellWishes from './TabletMobileWellWishes';
import PartyAccess from './PartyAccess';



function TabletMobile() {
    return (
        <div>
                  {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route path="/" element={<TabletMobileLanding/>} exact  />
            
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          <Route path="/wellwishes" element={<TabletMobileWellWishes/>} exact   />
            
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

export default TabletMobile;
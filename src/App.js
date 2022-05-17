import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link, } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import './App.css';

// import Landing from './Landing/Landing';
// import DaysTimer from './DaysTimer/DaysTimer';
// import AdviceCard from './AdviceCard/AdviceCard';


import Desktop from "./responsive-components/desktop/component";
import Laptop from "./responsive-components/laptop/component";
import BigScreen from "./responsive-components/big-screen/component";
import MedScreen from "./responsive-components/med-screen/component";
import SmallMobile from "./responsive-components/small-mobile/component";
import ExSmallMobile from "./responsive-components/ex-small-mobile/component";
import Mobile from "./responsive-components/mobile/component";
import TabletMobile from "./responsive-components/tablet-mobile/component";

function App() {

  const isExSmallMobileDevice = useMediaQuery({
    query: "(min-device-width: 355px)",
  });

  const isSmallMobileDevice = useMediaQuery({
    query: "(min-device-width: 376px)",
  });


  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });

  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 890px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1130px)",
  });


  const isMedScreen = useMediaQuery({
    query: "(min-device-width: 1250px )",
  });

  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1450px )",
  });

  if (isBigScreen) {
    return <BigScreen />
    } else if (isMedScreen) {
      return  <MedScreen />
    } else if (isDesktop) {
        return  <Desktop />
      } else if (isLaptop) {
          return <Laptop/>
        } else if (isTabletDevice) {
            return <TabletMobile />
          } else if (isMobileDevice) {
              return < Mobile />
            } else if (isSmallMobileDevice) {
              return < SmallMobile />
            } else if (isExSmallMobileDevice) {
              return < ExSmallMobile />
            } else {
                return < ExSmallMobile />
          }
        }
export default App;
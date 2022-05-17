import React from 'react'

import DaysTimer from './DaysTimer/DaysTimer';
import logo from '../../img/2022icon.png';
import './styles.css'






function BigScreen() {
    return (
        <div className="Landing-big-screen" style={{ backgroundImage: "url(/keya5.jpg)", backgroundPosition: 'center',
                                                      backgroundSize: 'cover', backgroundRepeat: 'no-repeat',}} >
                                        
              <header className="Landing-header-big-screen">
                <div className="Landing-header-div-big-screen">
                   <h1 className="HeaderText-big-screen Main-name-big-screen">Shakeya Bell</h1>
                   <img src={logo} className="Landing-logo-big-screen" alt="logo" />
                   <h1 className="HeaderText-big-screen Main-graduate-big-screen">Graduate</h1>
                </div>
          {/*2022 Icon attribute*/}
          {/* <a href="https://www.flaticon.com/free-icons/2022" title="2022 icons">2022 icons created by Vector Squad - Flaticon</a> */}
              </header>

              <div className="main-content">
                <DaysTimer />
              </div>

      </div>
    )
}

export default BigScreen;
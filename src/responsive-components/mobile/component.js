import React from 'react'

import DaysTimer from './DaysTimer/DaysTimer';
import logo from '../../img/2022icon.png';
import './styles.css'






function TabletMobile() {
    return (
        <div className="Landing-mobile" style={{ backgroundImage: "url(/keya5.jpg)", backgroundPosition: 'left 35% bottom',
                                                      backgroundSize: 'cover', backgroundRepeat: 'no-repeat',}} >
                                        
              <header className="Landing-header-mobile">
                <div className="Landing-header-div-mobile">
                   <h1 className="HeaderText-mobile Main-name-mobile">Shakeya Bell</h1>
                   <img src={logo} className="Landing-logo-mobile" alt="logo" />
                   <h1 className="HeaderText-mobile Main-graduate-mobile">Graduate</h1>
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

export default TabletMobile;
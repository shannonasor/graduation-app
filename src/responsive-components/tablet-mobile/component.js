import React from 'react'

import DaysTimer from './DaysTimer/DaysTimer';
import logo from '../../img/2022icon.png';
import './styles.css'






function TabletMobile() {
    return (
        <div className="Landing-tablet-mobile" style={{ backgroundImage: "url(/keya5.jpg)", backgroundPosition: 'center',
                                                      backgroundSize: 'cover', backgroundRepeat: 'no-repeat',}} >




                                        
              <header className="Landing-header-tablet-mobile">

              <div className="main-content-tablet-mobile">
                <DaysTimer />
              </div>


                <div className="Landing-header-all-div-tablet-mobile">
                <div className="Landing-header-div-tablet-mobile">
                   <h1 className="HeaderText-tablet-mobile Main-name-tablet-mobile">Shakeya Bell</h1>
                   <img src={logo} className="Landing-logo-tablet-mobile" alt="logo" />
                   <h1 className="HeaderText-tablet-mobile Main-graduate-tablet-mobile">Graduate</h1>
                </div>
          {/*2022 Icon attribute*/}
          {/* <a href="https://www.flaticon.com/free-icons/2022" title="2022 icons">2022 icons created by Vector Squad - Flaticon</a> */}

          <div className='buttons-tablet-mobile'>
              <button className='button-tablet-mobile button1-tablet-mobile'>Send Well Wishes</button>
                <button className='button-tablet-mobile button2-tablet-mobile'>Virtual Graduation Party</button>
              </div>
              </div>

              
              </header>


             
      </div>
    )
}

export default TabletMobile;
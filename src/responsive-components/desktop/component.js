import React from 'react'

import DaysTimer from './DaysTimer/DaysTimer';
import logo from '../../img/2022icon.png';
import './styles.css'






function Desktop() {
    return (
        <div className="Landing-desktop" style={{ backgroundImage: "url(/keya5.jpg)", backgroundPosition: 'center',
                                                      backgroundSize: 'cover', backgroundRepeat: 'no-repeat',}} >
                                        
              <header className="Landing-header-desktop">

                <div className="main-content-desktop">
                  <DaysTimer />
                </div>

                <div className="Landing-header-all-div-desktop">
                  <div className="Landing-header-div-desktop">
                    <h1 className="HeaderText-laptop Main-name-desktop">Shakeya Bell</h1>
                    <img src={logo} className="Landing-logo-desktop" alt="logo" />
                    <h1 className="HeaderText-desktop Main-graduate-desktop">Graduate</h1>
                  </div>

                  <div className='buttons-desktop'>
                    <button className='button-desktop button1-desktop'>Send Well Wishes</button>
                    <button className='button-desktop button2-desktop'>Virtual Graduation Party</button>
                  </div>
                </div>
              </header>

       {/*2022 Icon attribute*/}
       {/* <a href="https://www.flaticon.com/free-icons/2022" title="2022 icons">2022 icons created by Vector Squad - Flaticon</a> */}


      </div>
    )
}

export default Desktop;
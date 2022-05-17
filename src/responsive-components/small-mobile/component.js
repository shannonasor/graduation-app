import React from 'react'

import DaysTimer from './DaysTimer/DaysTimer';
import logo from '../../img/2022icon.png';
import './styles.css'






function SmallMobile() {
    return (
        <div className="Landing-small-mobile" style={{ backgroundImage: "url(/keya5.jpg)", backgroundPosition: 'left 35% bottom',
                                                      backgroundSize: 'cover', backgroundRepeat: 'no-repeat',}} >
                                        
              <header className="Landing-header-small-mobile">
                <div className="Landing-header-div-small-mobile">
                   <h1 className="HeaderText-small-mobile Main-name-small-mobile">Shakeya Bell</h1>
                   <img src={logo} className="Landing-logo-small-mobile" alt="logo" />
                   <h1 className="HeaderText-small-mobile Main-graduate-small-mobile">Graduate</h1>
                </div>
          {/*2022 Icon attribute*/}
          {/* <a href="https://www.flaticon.com/free-icons/2022" title="2022 icons">2022 icons created by Vector Squad - Flaticon</a> */}
              </header>


              <div className='buttons-small-mobile'>
                <button className='button-small-mobile button1-small-mobile'>Cash App</button>
                <button className='button-small-mobile button2-small-mobile'>Give Advice</button>
                <button className='button-small-mobile button3-small-mobile'>Virtual Graduation Party</button>
              </div>


              <div className="main-content-small-mobile">
                <DaysTimer />
              </div>

              

      </div>
    )
}

export default SmallMobile;
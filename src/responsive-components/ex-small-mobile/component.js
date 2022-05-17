import React from 'react'

import DaysTimer from './DaysTimer/DaysTimer';
import logo from '../../img/2022icon.png';
import './styles.css'






function ExSmallMobile() {
    return (
        <div className="Landing-ex-small-mobile" style={{ backgroundImage: "url(/keya5.jpg)", backgroundPosition: 'left 35% bottom',
                                                      backgroundSize: 'cover', backgroundRepeat: 'no-repeat',}} >
                                        
              <header className="Landing-header-ex-small-mobile">
                <div className="Landing-header-div-ex-small-mobile">
                   <h1 className="HeaderText-ex-small-mobile Main-name-ex-small-mobile">Shakeya Bell</h1>
                   <img src={logo} className="Landing-logo-ex-small-mobile" alt="logo" />
                   <h1 className="HeaderText-ex-small-mobile Main-graduate-ex-small-mobile">Graduate</h1>
                </div>
          {/*2022 Icon attribute*/}
          {/* <a href="https://www.flaticon.com/free-icons/2022" title="2022 icons">2022 icons created by Vector Squad - Flaticon</a> */}
              </header>


              <div className='buttons-ex-small-mobile'>
                <button className='button-ex-small-mobile button1-ex-small-mobile'>Cash App</button>
                <button className='button-ex-small-mobile button2-ex-small-mobile'>Give Advice</button>
                <button className='button-ex-small-mobile button3-ex-small-mobile'>Virtual Graduation Party</button>
              </div>


              <div className="main-content-ex-small-mobile">
                <DaysTimer />
              </div>

              

      </div>
    )
}

export default ExSmallMobile;
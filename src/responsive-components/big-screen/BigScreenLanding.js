import React from 'react';
import { Link } from 'react-router-dom';
import DaysTimer from './DaysTimer/DaysTimer';
import logo from '../../img/2022icon.png';
import './styles.css'






function ExSmallMobileLanding() {
    return (
        <div className="Landing-ex-small-mobile" style={{ backgroundImage: "url(/keya5.jpg)", backgroundPosition: 'left 35% bottom',
                                                      backgroundSize: 'cover', backgroundRepeat: 'no-repeat',}} >
                                        
              <header className="Landing-header-ex-small-mobile">
                <div className="Landing-header-div-ex-small-mobile">
                   <h1 className="HeaderText-ex-small-mobile Main-name-ex-small-mobile">Shakeya Bell</h1>
                   <img src={logo} className="Landing-logo-ex-small-mobile" alt="logo" />
                   <h1 className="HeaderText-ex-small-mobile Main-graduate-ex-small-mobile">Graduate</h1>
                </div>
              </header>

              <div className='buttons-ex-small-mobile'>
                <Link to='/wellwishes'>
                  <button className='button-ex-small-mobile button1-ex-small-mobile'>Send Well Wishes</button>
                </Link>

                <Link to='/partyaccess'>
                <button className='button-ex-small-mobile button2-ex-small-mobile'>Virtual Graduation Party</button>
                </Link>
              </div>

              <div className="main-content-ex-small-mobile">
                <DaysTimer />
              </div>
                         {/*2022 Icon attribute*/}
                         {/* <a href="https://www.flaticon.com/free-icons/2022" title="2022 icons">2022 icons created by Vector Squad - Flaticon</a> */}
              

      </div>
    )
}

export default ExSmallMobileLanding;
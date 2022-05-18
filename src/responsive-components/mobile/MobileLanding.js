import React from 'react';
import { Link } from 'react-router-dom';
import DaysTimer from './DaysTimer/DaysTimer';
import logo from '../../img/2022icon.png';
import './styles.css'






function MobileLanding() {
    return (
        <div className="Landing-ex-small-mobile" style={{ backgroundImage: "url(/keya5.jpg)", backgroundPosition: 'left 35% bottom',
                                                      backgroundSize: 'cover', backgroundRepeat: 'no-repeat',}} >
                                        
              <header className="Landing-header-mobile">
                <div className="Landing-header-div-mobile">
                   <h1 className="HeaderText-mobile Main-name-mobile">Shakeya Bell</h1>
                   <img src={logo} className="Landing-logo-mobile" alt="logo" />
                   <h1 className="HeaderText-mobile Main-graduate-mobile">Graduate</h1>
                </div>
              </header>

              <div className='buttons-mobile'>
                <Link to='/wellwishes'>
                  <button className='button-mobile button1-mobile'>Send Well Wishes</button>
                </Link>

                <Link to='/wellwishes'>
                  <button className='button-mobile button2-mobile'>Virtual Graduation Party</button>
                </Link>
              </div>

              <div className="main-content-mobile">
                <DaysTimer />
              </div>
                         {/*2022 Icon attribute*/}
                         {/* <a href="https://www.flaticon.com/free-icons/2022" title="2022 icons">2022 icons created by Vector Squad - Flaticon</a> */}
              

      </div>
    )
}

export default MobileLanding;
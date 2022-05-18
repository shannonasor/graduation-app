import React from 'react';
import { Link } from 'react-router-dom';
import DaysTimer from './DaysTimer/DaysTimer';
import logo from '../../img/2022icon.png';
import './styles.css'






function SmallMobileLanding() {
    return (
        <div className="Landing-small-mobile" style={{ backgroundImage: "url(/keya5.jpg)", backgroundPosition: 'left 35% bottom',
                                                      backgroundSize: 'cover', backgroundRepeat: 'no-repeat',}} >
                                        
              <header className="Landing-header-small-mobile">
                <div className="Landing-header-div-small-mobile">
                   <h1 className="HeaderText-small-mobile Main-name-small-mobile">Shakeya Bell</h1>
                   <img src={logo} className="Landing-logo-small-mobile" alt="logo" />
                   <h1 className="HeaderText-small-mobile Main-graduate-small-mobile">Graduate</h1>
                </div>
              </header>

              <div className='buttons-small-mobile'>
                <Link to='/wellwishes'>
                <button className='button-small-mobile button1-small-mobile'>Send Well Wishes</button>
                </Link>
                <button className='button-small-mobile button2-small-mobile'>Virtual Graduation Party</button>
              </div>

              <div className="main-content-small-mobile">
                <DaysTimer />
              </div>
                         {/*2022 Icon attribute*/}
                         {/* <a href="https://www.flaticon.com/free-icons/2022" title="2022 icons">2022 icons created by Vector Squad - Flaticon</a> */}
              

      </div>
    )
}

export default SmallMobileLanding;
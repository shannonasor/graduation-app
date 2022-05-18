import React from 'react';
import { Link } from 'react-router-dom';
import DaysTimer from './DaysTimer/DaysTimer';
import logo from '../../img/2022icon.png';
import './styles.css'






function ExSmallMobileLanding() {
    return (
        <div className="Landing-big-screen" style={{ backgroundImage: "url(/keya5.jpg)", backgroundPosition: 'left 35% bottom',
                                                      backgroundSize: 'cover', backgroundRepeat: 'no-repeat',}} >
                                        
          <header className="Landing-header-big-screen">

            <div className="main-content-big-screen">
              <DaysTimer />
            </div>

            <div className="Landing-header-all-div-big-screen">
              <div className="Landing-header-div-big-screen">
                <h1 className="HeaderText-big-screen Main-name-big-screen">Shakeya Bell</h1>
                <img src={logo} className="Landing-logo-big-screen" alt="logo" />
                <h1 className="HeaderText-big-screen Main-graduate-big-screen">Graduate</h1>
              </div>

              <div className='buttons-big-screen'>
                <Link to="/wellwishes">
                <button className='button-big-screen button1-big-screen'>Send Well Wishes</button>
                </Link>
                <button className='button-big-screen button2-big-screen'>Virtual Graduation Party</button>
              </div>
            </div>
          </header>

                  {/*2022 Icon attribute*/}
                  {/* <a href="https://www.flaticon.com/free-icons/2022" title="2022 icons">2022 icons created by Vector Squad - Flaticon</a> */}



      </div>
    )
}

export default ExSmallMobileLanding;
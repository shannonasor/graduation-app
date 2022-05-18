import React from 'react';
import { Link } from 'react-router-dom';
import DaysTimer from './DaysTimer/DaysTimer';
import logo from '../../img/2022icon.png';
import './styles.css'






function LaptopLanding() {
    return (
        <div className="Landing-laptop" style={{ backgroundImage: "url(/keya5.jpg)", backgroundPosition: 'left 35% bottom',
                                                      backgroundSize: 'cover', backgroundRepeat: 'no-repeat',}} >
                                        
          <header className="Landing-header-laptop">

            <div className="main-content-laptop">
              <DaysTimer />
            </div>

            <div className="Landing-header-all-div-laptop">
              <div className="Landing-header-div-laptop">
                <h1 className="HeaderText-laptop Main-name-laptop">Shakeya Bell</h1>
                <img src={logo} className="Landing-logo-laptop" alt="logo" />
                <h1 className="HeaderText-laptop Main-graduate-laptop">Graduate</h1>
              </div>

              <div className='buttons-laptop'>
                <Link to="/wellwishes">
                <button className='button-laptop button1-laptop'>Send Well Wishes</button>
                </Link>
                <button className='button-laptop button2-laptop'>Virtual Graduation Party</button>
              </div>
            </div>
          </header>

{/*2022 Icon attribute*/}
{/* <a href="https://www.flaticon.com/free-icons/2022" title="2022 icons">2022 icons created by Vector Squad - Flaticon</a> */}




      </div>
    )
}

export default LaptopLanding;
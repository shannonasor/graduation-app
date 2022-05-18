import React, {useState} from 'react';

  
const WellWishes = () => {
  return (
    <div className="Landing-ex-small-mobile" style={{ backgroundImage: "url(/wellwishesphoto.jpg)", backgroundPosition: 'left 35% bottom',
                                                      backgroundSize: 'cover', backgroundRepeat: 'no-repeat',}} >
      <header className="Landing-header-ex-small-mobile">
                <div className="Landing-header-div-ex-small-mobile">
                   <h1 className="HeaderText-ex-small-mobile Main-name-ex-small-mobile">Shakeya Bell</h1>
                   {/* <img src={logo} className="Landing-logo-ex-small-mobile" alt="logo" /> */}
                   <h1 className="HeaderText-ex-small-mobile Main-graduate-ex-small-mobile">Graduate</h1>
                </div>
              </header>


      
    </div>
  );
};
  
export default WellWishes;
import React, {useState} from 'react';
import './styles.css';
  
const ExSmallMobileWellWishes = () => {
    const [bePrepared, setBePrepared] = useState('');
    const [keep, setKeep] = useState('');
    const [openTo, setOpenTo] = useState('');
    const [always, setAlways] = useState('');
    const [dont, setDont] = useState('');
    const [dontBeAfraid, setDontBeAfraid] = useState('');
    const [lastAdvice, setLastAdvice] = useState('');



  return (
    <div className="Well-wishes-ex-small-mobile create" style={{ backgroundImage: "url(/wellwishesphoto.jpg)", backgroundPosition: 'left 35% bottom',
                                                      backgroundSize: 'cover', backgroundRepeat: 'no-repeat',}} >
      <h1>Advice For Shakeya</h1>

      <form className='advice-for-graduate'>
        <label>Be Prpared To:</label>
          <textarea 
                value={bePrepared}
                onChange={(e) => setBePrepared(e.target.value)}>
          </textarea>

        <label>Always Keep:</label>
          <textarea 
              value={keep}
              onChange={(e) => setKeep(e.target.value)}>
          </textarea>

        <label>Be Open To:</label>
          <textarea 
                value={openTo}
                onChange={(e) => setOpenTo(e.target.value)}>
          </textarea>

        <label>Hope You Always:</label>
        <textarea 
            value={always}
            onChange={(e) => setAlways(e.target.value)}
            ></textarea>

        <label>Hope You Don't:</label>
          <textarea 
                value={dont}
                onChange={(e) => setDont(e.target.value)}>
          </textarea>

        <label>Don't Be Afraid To:</label>
          <textarea 
                value={dontBeAfraid}
                onChange={(e) => setDontBeAfraid(e.target.value)}>
          </textarea>

        <label>My Last Piece of Advice is:</label>
          <textarea 
                value={lastAdvice}
                onChange={(e) => setLastAdvice(e.target.value)}>
          </textarea>

        <button>Send Advice</button>

      </form>

          <p>{bePrepared}</p>
          <p>{keep}</p>
          <p>{openTo}</p>
          <p>{always}</p>
          <p>{dont}</p>
          <p>{dontBeAfraid}</p>
          <p>{lastAdvice}</p>
      
    </div>
  );
};
  
export default ExSmallMobileWellWishes;
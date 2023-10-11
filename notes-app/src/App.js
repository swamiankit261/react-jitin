import './App.css';
import MySidebar from './components/MySidebar';
import Main from './components/Main';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import QRCode from 'react-qr-code';
import { THEMES } from './constants/contants';
import { useRef } from 'react';

function App() {

  const [theme, settheme] = useState(2);
  let timer = useRef();

  const handleBlink = () => {

    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    } else {
      timer.current = setInterval(() => {
        settheme(e => (e + 1) % THEMES.length);
      }, 1000);
    }

  }

  return (
    <>
      <div className={THEMES[theme]}>

        <div className='d-flex main_bg'>
          <div className='vh-100 p-3 pe-0 sidebar_prt'>
            <div className='h-100 rounded-4'>
              <MySidebar />
            </div>
          </div>

          <div className='vh-100 p-3 w-100'>
            <div className='h-100 shadow rounded-4 main_div p-3 overflow-auto'>
              <Main />
            </div>
          </div>
        </div>

        <div className='themeSelector'>
          <QRCode bgColor='transparent' title='Click to blink the page' value='http://192.168.29.37:1200/' level='L' size={30} onClick={handleBlink} />

          <button onClick={() => settheme(0)}></button>
          <button onClick={() => settheme(1)}></button>
          <button onClick={() => settheme(2)}></button>
          <button onClick={() => settheme(3)}></button>
        </div>

      </div>

      <Toaster position='top-center' />
    </>
  );
}

export default App;

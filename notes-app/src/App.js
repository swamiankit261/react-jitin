import logo from './logo.svg';
import './App.css';
import AddNotes from './components/AddNotes';
import MySidebar from './components/MySidebar';
import Main from './components/Main';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';

function App() {

  const [theme, settheme] = useState('theme3')
  return (
    <>

      <div className={theme}>

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
          <button onClick={() => settheme('theme1')}></button>
          <button onClick={() => settheme('theme2')}></button>
          <button onClick={() => settheme('theme3')}></button>
          <button onClick={() => settheme('theme4')}></button>
        </div>

      </div>

      <Toaster position='top-center' />
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import AddNotes from './components/AddNotes';
import MySidebar from './components/MySidebar';
import Main from './components/Main';

function App() {
  return (
    <>

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

    </>
  );
}

export default App;

import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Carousel from './components/Carousel';
import Images from './components/Images';
import States from './components/States';

function App() {
  return (
    <>

      <div className='display-1 text-success'>M deepu hun</div>

      <Navbar />
      <Cards />
      <Carousel />
      <Carousel />
      <Footer />

      {/* <Images /> */}

      {/* <States /> */}

    </>
  );
}

export default App;

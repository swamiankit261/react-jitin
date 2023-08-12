import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Carousel from './components/Carousel';
import Images from './components/Images';
import States from './components/States';
import Inputs from './components/Inputs';
import Textutils from './components/Textutils';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import FormValidation from './components/formValidation/FormValidation';
import FormValidationMore from './components/formValidation/FormValidationMore';

function App() {
  return (
    <>

      <Navbar />

      {/* <States /> */}
      {/* <Inputs /> */}

      {/* npm i react-router-dom */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/textUtil' element={<Textutils />} />
        <Route path='/images' element={<Images />} />
        <Route path='/formValidation' element={<FormValidationMore />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>

      <Footer />


    </>
  );
}

export default App;

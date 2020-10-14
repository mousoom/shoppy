import React from 'react';
import './App.css';

import Header from './mainComponent/Header/Header';
import Banner from './mainComponent/Banner/Banner';
import MainCard from './mainComponent/Card/mainCard';
import Footer from './mainComponent/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <MainCard/>
      <Footer/>
    </div>
  );
}

export default App;

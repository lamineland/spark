import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header.component';
import Home from './components/home.component';
import About from './components/aboutus.component'
import OurTeam from './components/ourteam.component'
import Realisations from './components/realisations.component'
import Services from './components/services.component'
import Formations from './components/formations.component'
import Contact from './components/contact.component'
import Footer from './components/footer.component'

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <OurTeam/>
      <Services/>
      <Formations/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;

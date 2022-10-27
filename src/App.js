import React from 'react';
import Header from'./layout/Header';
import Login from'./components/Login';
import Nosotros from './components/Nosotros'
import Cliente from './components/Cliente'
import Administrador from './components/Administrador';
import Usuario from './components/Usuario';
import Footer from './layout/Footer'
import './App.css'

function App() {
  return (

    <>
    <Header/>
    <body>
    <Nosotros/>
    </body>
    <Footer/>
    </>
  );
}

export default App;

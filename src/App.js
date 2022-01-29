/**
 * @author Stefany izidio
 * @contact izidiostefany@gmail.com
 * @date 29/01/2022
 */

import React from 'react';
import './App.css';
import NavHeader from './components/includes/navheader/NavHeader.js';
import Home from './components/sections/home/home.js';
import Ola from './components/sections/ola/ola';
import Sobre from './components/sections/sobre/sobre';
import Experiencia from './components/sections/experiencia/experiencia';

class App extends React.Component {

  // ***** lembrar de remover - mensagem de construção
  // componentDidMount() {
  //   window.alert("Esta site ainda está em construção.");
  // }

  render() {
    return (
      <div className="App">
        <NavHeader />
        <Home />
        <Ola />
        <Sobre />
        <Experiencia />
      </div>
    );
  }
}

export default App;

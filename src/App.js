import logo from './logo.svg';
import './App.css';
import React from 'react';
//import SlotM from './SlotM';
import ShowEmoji from './ShowEmoji';
function App() {
 
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <h1 className="heading_style">welcome to <span style={{fontWeight:'bold'}}>slot machine game</span></h1>
      <ShowEmoji/>
    </>
  );
}

export default App;

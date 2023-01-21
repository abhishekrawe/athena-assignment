import React from "react";
import Navbar from './components/Navbar';
import Main from "./components/Main";
import './App.css';
import Landing from "./components/Landing/Landing";
function App() {
  return (
    <div className="App">
       <Navbar/>
       <Main/>
       <Landing/>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import Header from "./components/Header";
import './App.css';
import Landing from "./components/Landing/Landing";
function App() {

  //https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1

  const [text, setText] = useState([]);
  console.log(text);

  useEffect(() => {
    textapi();
  }, [])

  const textapi = async () => {
    const response = await fetch("https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1");
    //console.log(response) ;
    const jsonData = await response.json();
    //console.log(jsonData);
    setText(jsonData.texts);
  }

  //textapi();


  return (
    <>
    <Navbar />
    <Header text={text}/>
    <Landing text={text}/>
    </>

  );
}

export default App;

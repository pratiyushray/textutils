import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Alert from './components/Alert';
// import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';

import React, {useState} from 'react';
function App() {
  const [mode, setMode] = useState('light');  //Whether dark mode enable or not
  // const [alert, setAlert] = useState("");

  // const showAlert=(message,type)=>{
  //   setAlert({
  //     msg:message,
  //     type:type
  //   });


  // }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#5E5E5E';
      document.title='DARK WEB';
      // showAlert("Dark Mode has been enabled","success")

      // setInterval(() => {
      //   document.title='TextUtils is Amazing Mode';
      // }, 1500);
      // setInterval(() => {
      //   document.title='Install TextUtils Now';
      // }, 2000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.title='LIGHT WEB';
      // showAlert("Light Mode has been enabled","success")

    }
  }
  return (
    <>
    <Navbar title="TextUtils" aboutText="About US" mode={mode} toggleMode={toggleMode}/>
    <TextForm heading="Enter Your Text Here" mode={mode}/>
    < About/>
    </>
  );
}

export default App;

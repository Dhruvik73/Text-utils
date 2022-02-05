import './App.css'
// import About from './components/about';
import Navbar from "./components/Navbar";
import Textform from './components/Textform';
import React,{useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode,setmode]=useState('light')
  const dark=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='#042743'
      document.body.style.color='white'
      showalert('Dark mode enabled','success')
      document.title='Text Utils - DarkMode'
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='rgb(66 131 228 / 25%)'
      document.body.style.color='black'
      showalert('light mode enabled','success')
      document.title='Text Utils - LightMode'
    }
  }
  const [alert,setalert]=useState(null)
  const showalert=(message,type)=>{
     setalert({
       message:message,
       type:type
     })
     setTimeout(()=>{
        setalert(null)
     },1500)
  }
  return (
    // <Router>
    <>
    <Navbar title="textutils" about="about textutils" mode={mode} btn={dark}/>
    <Alert  alert={alert}/>
     {/* <Switch> */}
          {/* <Route path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
          {/* <Route path="/"> */}
          <div className='container my-3'>
             <Textform  show={showalert} head='Enter text here to anlyse' mode={mode} /> 
          </div>
           {/* </Route> */}
        {/* </Switch> */}
    {/* </Router> */}
    </>
  );
}

export default App;

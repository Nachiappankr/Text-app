import './App.css';
import About from './Components/About';
import './Components/Navbar.js'
import Navbar from './Components/Navbar.js';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router";
function App() {
  const [alert,setAlert]=useState(null)
  const showalert=(message,alertType)=>{
    setAlert({
    msg:message,
    type:alertType
  })
    setTimeout(()=>{
      setAlert(null);
    },3000);
  }
  return ( 
      <>
      <Router>
      <Navbar  title="Text-App" aboutText="About"/>
      <Alert alert={alert}/>
      <div className='container my-3'>
        <Routes>
          <Route excat path="/about" element={<About/>}/>
          <Route exact path="/" element={<TextForm showalert={showalert} textareatitle="Enter text to analyze"/>}/>
        </Routes>
      {/*<About/>*/}
      </div>
      </Router>
      </>
  );
}

export default App;

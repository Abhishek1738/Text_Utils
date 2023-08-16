
import './App.css';
import Alert from './components/Alert.js';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  const toggleMode=()=>{
    if(mode ==='light'){
      setMode('dark');
      document.title='TextUtils: Light Mode'
      document.body.style.backgroundColor='blue'
      showAlert("Dark mode has been enabled","success");
      setInterval(()=>{
        document.title='TextUtils is cool'
      },2000)
      setInterval(()=>{
        document.title='TextUtils is fantastic'
      },3000)
      }
      else{
        setMode('light');
        document.title='TextUtils: Dark Mode'
        document.body.style.backgroundColor='white'
        showAlert("Light mode has been enabled","success");
        setInterval(()=>{
          document.title='TextUtils is cool'
        },2000)
        setInterval(()=>{
          document.title='TextUtils is fantastic'
        },3000)
      }
  }
  return (
    <>
    {/* <Router> */}
            {/* <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/> */}
            <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
            <Alert alert={alert}/>
            <div className="container my-3">
            {/* <Routes>
                <Route path="/about">
                  <About />
                </Route>
                <Route exact path="/"> */}
                  <TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}/>
                {/* </Route>
            </Routes>  */}
            </div>
      {/* </Router>  */}
    </>
  );
}

export default App;

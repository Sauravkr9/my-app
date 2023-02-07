import './App.css';
import React, { useState } from 'react';
import Form from './Components/form';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';

function App() {
  const [mode, setmode] = useState('light');
  const [txt, settxt] = useState('enable dark mode');
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      settxt('disable dark mode');
      document.body.style.backgroundColor = 'grey';
      showalert('dark mode has been enabled', 'success');
    }
    else {
      setmode('light');
      settxt('enable dark mode');
      document.body.style.backgroundColor = "white";
      showalert('dark mode has been disabled', 'success');
    }
  }
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500)
  }
  return (
    <>       
        <Navbar mode={mode} togglemode={togglemode} txt={txt} />
        <Alert alert={alert} />
        <div className="container">
          <Form heading="enter the text" mode={mode} showalert={showalert} />
        </div>
    </>
  );
}

export default App;

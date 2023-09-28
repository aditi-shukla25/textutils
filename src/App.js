import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from "react";
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter,
//   Route, // Import Route here
//   Routes, // Import Switch here
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
        setMode("dark");
        document.body.style.backgroundColor = "#030625";
        showAlert("Dark mode has been enabled", "success");
   }else {
        setMode("light");
        document.body.style.backgroundColor = "white";
        showAlert("Light mode has been enabled", "success");
      }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
            msg: message,
            type: type,
          });
          setTimeout(() => {
            setAlert(null);
          }, 1000);
  };

  return (
    <>
    {/* <BrowserRouter> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
      {/* <Routes>
        <Route exact path="/about" element={<About/>}> */}
          {/* <About /> */}
        {/* </Route>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}> */}
        {/* </Route>
      </Routes>
    </BrowserRouter> */}
    </>
  );
}

export default App;


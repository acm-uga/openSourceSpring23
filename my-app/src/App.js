import React from "react";
import Navbar from "./components/Navbar/Navbar";
import LoginPage from "./components/LoginPage/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<React.Fragment></React.Fragment>}></Route>

          <Route
            path="/login"
            element={
              <React.Fragment>
                <LoginPage />
              </React.Fragment>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
  /*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
}

export default App;

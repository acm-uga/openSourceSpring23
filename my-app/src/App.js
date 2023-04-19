import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
// import logo from "./logo.svg";
import './App.css';
import HomeNavbar from './components/HomeNavbar/HomeNavbar';
import TrendingItems from './components/TrendingItems/TrendingItems';
import HousingPage from './components/HousingPage/HousingPage';
import CourseSwapPage from './components/CourseSwapPage/CourseSwapPage';
import CourseSwapPagePersonal from './components/CourseSwapPage/CourseSwapPagePersonal';
import CourseSwapPageSaved from './components/CourseSwapPage/CourseSwapPageSaved';
import FAQPage from './components/FAQPage/FAQPage';
import CreateAccountPage from './components/CreateAccountPage/CreateAccountPage';
import TextBookPage from './components/TextBookPage/TextBookPage';
import ParkingPassMain from './components/ParkingPassSwap/ParkingPassMain';
import TicketPage from './components/TicketPage/TicketPage';
import TutorPage from './components/TutorPage/TutorPage';

function App() {
  return (
    <div className="App">
      <Router>
        <HomeNavbar />
        <Routes>
          <Route path="/" element={<TrendingItems />} />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/course-swap" element={<CourseSwapPage />} />
          <Route
            path="/course-swap/personal"
            element={<CourseSwapPagePersonal />}
          />
          <Route path="/course-swap/saved" element={<CourseSwapPageSaved />} />

          <Route path="/tutor" element={<TutorPage />} />

          <Route path="/housing" element={<HousingPage />} />

          <Route path="/register" element={<CreateAccountPage />} />

          <Route path="/textbooks" element={<TextBookPage />} />

          <Route path="/faq" element={<FAQPage />} />

          <Route path="/parking" element={<ParkingPassMain />} />
          <Route path="/tickets" element={<TicketPage />} />
          {/* <Route path="/Profile" element={<Profile />} />  */}
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
  ); */
}

export default App;

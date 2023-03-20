import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
// import logo from "./logo.svg";
import './App.css';
import HomeNavbar from './components/HomeNavbar/HomeNavbar';
import TrendingItems from './components/TrendingItems/TrendingItems';
import HousingPage from './components/HousingPage/HousingPage';
import CourseSwapPage from './components/CourseSwapPage/CourseSwapPage';
import FAQPage from './components/FAQPage/FAQPage';
import CreateAccountPage from './components/CreateAccountPage/CreateAccountPage';
import TextbookPage from './components/TextbookPage/TextbookPage';

function App() {
  return (
    <div className="App">
      <Router>
        <HomeNavbar />
        <Routes>
          <Route path="/" element={<TrendingItems />} />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/course-swap" element={<CourseSwapPage />} />

          <Route path="/housing" element={<HousingPage />} />

          <Route path="/register" element={<CreateAccountPage />} />

          <Route path="/faq" element={<FAQPage />} />

          <Route path="/textbook" element={<TextbookPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

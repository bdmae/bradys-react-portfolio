import React from "react";
// global style
import GlobalStyle from './components/GlobalStyle';

// import pages
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import MyWork from './pages/MyWork';
import Nav from './components/Nav';

//router
import { Routes, Route, useLocation } from "react-router-dom";

//animation
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AboutMe />} />
          <Route path="/work" element={<MyWork />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;

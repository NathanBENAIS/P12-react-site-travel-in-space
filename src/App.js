import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import Training from "./Pages/Training";
import Contact from "./Pages/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/training' element={<Training />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

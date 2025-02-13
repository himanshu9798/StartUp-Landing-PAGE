import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './component/Home';
import Pricing from './component/Pricing'
import Contact from './component/Contact';
import About from './component/About';
import Footer from './component/Footer';
import Header from './component/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
 <Router>
 <Header></Header>
  <Routes>
  <Route path="/" element={<App></App>}/>
    <Route path="/Home" element={<Home></Home>}/>
    <Route path="/about" element={<About></About>}/>
    <Route path="/contact" element={<Contact></Contact>}/>
    <Route path="/Price" element={<Pricing></Pricing>}/>
    
  </Routes>
  <Footer></Footer>
 </Router>
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

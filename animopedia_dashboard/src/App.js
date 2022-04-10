import React from 'react';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function App() {
  return <div>
    {/* <Topbar />
    <div className='flex relative overflow-hidden sm:h-[calc(100vh_-_65px)] lg:h-[calc(100vh_-_65px)]  '>
      <Sidebar />
      <Home />
    </div> */}
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route exact path="/" element={<Home />} />
        
        </Routes>
        {/* <Home/> */}
      </Router>
    </>


  </div>;
}



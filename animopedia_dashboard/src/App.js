import React from 'react';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';


export default function App() {
  return <div>
    <>
    <Login />
      {/* <Router>
        <Sidebar />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />

        </Routes>
        <Home/>
      </Router> */}
    </>


  </div>;
}



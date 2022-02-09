import React from 'react';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';

export default function App() {
  return <div>
    <Topbar />
    <div className=' h-[calc(100vh_-_65px)] flex sticky top-50px'>
      <Sidebar />
      <Home />
    </div>

  </div>;
}



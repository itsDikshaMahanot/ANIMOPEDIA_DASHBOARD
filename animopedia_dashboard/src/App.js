import React from 'react';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';

export default function App() {
  return <div>
    <Topbar />
    <div className='flex relative overflow-hidden sm:h-[calc(100vh_-_60px)] lg:h-[calc(100vh_-_65px)]  '>
      <Sidebar />
      <Home />
    </div>

  </div>;
}



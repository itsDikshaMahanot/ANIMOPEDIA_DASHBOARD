import React from 'react';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';

export default function App() {
  return <div>
    <Topbar />
    <div className='flex relative '>
      <Sidebar />
      <Home />
    </div>

  </div>;
}



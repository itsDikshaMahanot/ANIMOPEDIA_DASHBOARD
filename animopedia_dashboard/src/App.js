import React from 'react';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';

export default function App() {
  return <div>
    <Topbar />
    <div className='relative h-[calc(100vh_-_70px)] flex'>
      <Sidebar />
      <div className='block lg:flex-1 font-semibold px-4 bg-blue-100 z-50'>
        other pages
        other pages <br />
        other pages
        other pages
        other pages
        other pages
        other pages
        other pages
        other pages
        other pages
        other pages
        other pages
        other pages
      </div>
    </div>

  </div>;
}



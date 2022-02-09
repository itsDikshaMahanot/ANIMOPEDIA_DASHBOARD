import React from 'react';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import LineWeightRounded from '@mui/icons-material/LineWeightRounded';
import { HomeIcon, UploadIcon, CollectionIcon, XIcon } from '@heroicons/react/outline'
//import { Transition } from '@headlessui/react';

export default function Sidebar() {
    return (
        <div className='flex bg-gray-50 px-1 md:w-60 '>
            <div className='h-[calc(100vh_-_105px)] bg-gray-800 rounded-xl my-4 text-white md:w-56 mx-2 sm:w-40'>
                <h3 className='font-bold align-text-top pt-6 pb-4 font-serif text-xl text-center border-white'> Dashboard</h3>
                <nav className='px-2 py-1 text-l'>
                    <a href='#' className='px-2 py-2.5 flex items-center space-x-2 hover:bg-blue-500 rounded transition duration-200 hover:text-blue-100 active:bg-gray-300'>
                        <HomeIcon className="h-5 w-5"/>
                        <span className=''>Home</span>
                    </a>
                </nav>
                <h3 className='font-bold align-text-top px-2 py-2 font-serif text-xl text-center'> Products</h3>
                <nav className='px-2 py-1 text-l'>
                <a href='#' className='px-2 py-2.5 flex items-center space-x-2 hover:bg-blue-500 rounded transition duration-200 hover:text-blue-100'>
                        <CollectionIcon className="h-5 w-5" />
                        <span >Products Info</span>
                    </a>
                    <a href='#' className='px-2 py-2.5 flex items-center space-x-2 hover:bg-blue-500 rounded transition duration-200 hover:text-blue-100'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span >Update</span>
                    </a>
                    <a href='#' className='px-2 py-2.5 flex items-center space-x-2 hover:bg-blue-500 rounded transition duration-200 hover:text-blue-100'>
                        <UploadIcon className="h-5 w-5" />
                        <span>Insert</span>
                    </a>
                </nav>
            </div>
        </div>

    );
}

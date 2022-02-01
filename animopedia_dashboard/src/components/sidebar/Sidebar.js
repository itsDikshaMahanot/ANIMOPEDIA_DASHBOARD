import React, { Fragment } from 'react';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import LineWeightRounded from '@mui/icons-material/LineWeightRounded';
import { MenuIcon, UploadIcon, XIcon } from '@heroicons/react/outline'
import { Transition } from '@headlessui/react';
import { Dialog, Popover, Tab} from '@headlessui/react'

    
export default function Sidebar() {
    return (
        <div className='flex bg-gray-100 w-64 '>
            <div className='max-h-full bg-blue-500  md:w-64 sm:w-40'>
                <h3 className='font-bold align-text-top px-3 py-3 font-serif text-xl'>Dashboard</h3>
                <nav className='px-0.5 py-1'>
                    <a href='#' className='px-2 py-2.5 flex items-center space-x-2 hover:bg-blue-400 rounded transition duration-200 hover:text-blue-100'>
                        <MenuIcon className="h-6 w-6" />
                        <span>Home</span>
                    </a>
                    <a href='#' className='px-2 py-2.5 flex items-center space-x-2 hover:bg-blue-400 rounded transition duration-200 hover:text-blue-100'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>Update</span>
                    </a>
                    <a href='#' className='px-2 py-2.5 flex items-center space-x-2 hover:bg-blue-400 rounded transition duration-200 hover:text-blue-100'>
                        <UploadIcon className="h-6 w-6" />
                        <span>Insert</span>
                    </a>
                </nav>
            </div>
        </div>

    );
}

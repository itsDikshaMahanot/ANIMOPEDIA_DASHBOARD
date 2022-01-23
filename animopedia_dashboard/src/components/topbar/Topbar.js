import React from 'react';
import PetsRoundedIcon from '@mui/icons-material/PetsRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, SearchIcon, ShoppingBagIcon, XIcon } from '@heroicons/react/outline'

export default function Topbar() {
    return (
        <nav aria-label="Top" className="bg-green-100 max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-b border-gray-200 ">
                <div className="h-16 flex justify-between pt-5 ">
                    <button
                        type="button"
                        className="bg-white p-1 mb-2 rounded-md text-gray-400 lg:hidden"
                    // onClick={() => setOpen(true)}
                    >
                        <span className="sr-only">Open menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Logo */}
                    <div className="ml-4 flex lg:ml-0">
                        <a href="#">
                            <span className="sr-only">Workflow</span>
                            <PetsRoundedIcon>Animopedia</PetsRoundedIcon>
                        </a>
                    </div> 
                    <div className='flex mr-4 lg:mr-0'>
                    <PersonRoundedIcon /> 
                    </div>
                                  
                </div>
                
            </div>
        </nav>
    );
}

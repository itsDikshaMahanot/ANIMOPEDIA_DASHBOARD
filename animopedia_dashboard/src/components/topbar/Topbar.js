import React from 'react';
import PetsRoundedIcon from '@mui/icons-material/PetsRounded';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, SearchIcon, ShoppingBagIcon, XIcon } from '@heroicons/react/outline'

export default function Topbar() {
    const [open, setOpen] = useState(false)
    return (
        <nav aria-label="Top" className="bg-green-100 max-w-full mx-auto px-4 sm:px-6 lg:px-8 sticky top-0 z-999">
            <div className="border-b border-gray-200 ">
                <div className="h-16 flex justify-between pt-5 ">
                    <button
                        type="button"
                        className="bg-white p-1 mb-2 rounded-md text-gray-400 lg:hidden"
                        onClick={() => setOpen(true)}
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
                    <div className='flex mr-4 lg:mr-0 mb-2 cursor-pointer'>
                        <img className='h-8 w-auto rounded-full mr-3'
                            src='https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'>
                        </img>
                        <SettingsOutlinedIcon />
                    </div>

                </div>

            </div>
        </nav>
    );
}

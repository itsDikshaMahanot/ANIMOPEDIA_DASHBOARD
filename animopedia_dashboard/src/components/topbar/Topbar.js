import React from 'react';
import PetsRoundedIcon from '@mui/icons-material/PetsRounded';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, SearchIcon, ShoppingBagIcon, XIcon } from '@heroicons/react/outline'

export default function Topbar() {
    const [open, setOpen] = useState(false)
    return (
        <nav aria-label="Top" className="bg-gray-100 max-w-full mx-auto px-4 sm:px-6 lg:px-8 sticky top-0 z-999">
            <div className="border-black ">
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
                    <div className="ml-0 flex">
                        <a href="#">
                            <span className="sr-only">Animopedia</span>
                            <PetsRoundedIcon>Animopedia</PetsRoundedIcon>
                        </a>
                    </div>
                    <div className='flex mr-2 lg:mr-2 mb-2 cursor-pointer rounded-full'>
                        <img className='h-8 w-8 rounded-full mr-2'
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeCDQHuV1KMSc0PfPpmq4XR0DlBQzQoS0AuQ&usqp=CAU'>
                        </img>
                        <SettingsOutlinedIcon />
                    </div>

                </div>

            </div>
        </nav>
    );
}

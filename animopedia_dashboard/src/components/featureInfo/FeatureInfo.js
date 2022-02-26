import React from 'react';
import SetMealOutlinedIcon from '@mui/icons-material/SetMealOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog, faFish, faRupeeSign } from '@fortawesome/free-solid-svg-icons'

export default function FeatureInfo() {
    return (
        <div className="px-1 py-2 overflow-hidden">            
            <div className='my-2 mx-2  md:grid grid-rows-3 grid-cols-2 gap-12 sm:flex'>
                <div className='border-gray-500 shadow-md shadow-cyan-500/50 cursor-pointer rounded-lg px-2 py-2 lg:flex-1 mx-1 my-1' >
                    <span className='md:px-1 md:text-lg sm:text-sm font-semibold md:font-bold sm:font-light'> Dog Breeds </span>
                    <div className='mt-3 content-center'>
                        <FontAwesomeIcon icon={faDog} />
                        <span className='px-1 mb-5'>Dog Breed New</span> <br />
                        <FontAwesomeIcon icon={faRupeeSign} />
                        <span className='px-2'> Feature price of breed</span>
                    </div>
                </div>
                <div className='border-gray-500 shadow-md shadow-cyan-500/50 cursor-pointer rounded-lg px-2 py-2 lg:flex-1 mx-1 my-1' >
                    <span className='md:px-1 md:text-lg sm:text-sm font-semibold md:font-bold sm:font-light'> Dog Breeds </span>
                    <div className='mt-3 content-center'>
                        <FontAwesomeIcon icon={faDog} />
                        <span className='px-1 mb-5'>Dog Breed New</span> <br />
                        <FontAwesomeIcon icon={faRupeeSign} />
                        <span className='px-2'> Feature price of breed</span>
                    </div>
                </div>
                <div className='border-gray-500 shadow-md shadow-cyan-500/50 cursor-pointer rounded-lg px-2 py-2 lg:flex-1 mx-1 my-1' >
                    <span className='px-1 text-lg font-semibold'> Fish Breeds </span>
                    <div className='mt-3 content-center'>
                        <FontAwesomeIcon icon={faFish} />
                        <span className='px-1 mb-5'>Fish Breed New</span> <br />
                        <FontAwesomeIcon icon={faRupeeSign} />
                        <span className='px-2'> Feature price of breed</span>
                    </div>
                </div>
                <div className='border-gray-500 shadow-md shadow-cyan-500/50 cursor-pointer rounded-lg px-2 py-2 lg:flex-1 mx-1 my-1' >
                    <span className='px-1 text-lg font-semibold'> Fish Breeds </span>
                    <div className='mt-3 content-center'>
                        <FontAwesomeIcon icon={faFish} />
                        <span className='px-1 mb-5'>Fish Breed New</span> <br />
                        <FontAwesomeIcon icon={faRupeeSign} />
                        <span className='px-2'> Feature price of breed</span>
                    </div>
                </div>

               
            </div>
        </div>
    );

}

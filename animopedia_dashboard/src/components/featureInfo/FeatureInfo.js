import React from 'react';
import SetMealOutlinedIcon from '@mui/icons-material/SetMealOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog, faFish, faRupeeSign } from '@fortawesome/free-solid-svg-icons'

export default function FeatureInfo() {
    return (
        <div className='lg:px-1 py-12 w-100vh_ flex space justify-between  '>
            <div className='lg:px-3 py-5 flex-1 mx-10 border-gray-500 shadow-md shadow-gray-500/50 cursor-pointer rounded-lg border-2  ' >
                <span className='px-1 text-lg font-semibold'> Dog Breeds </span>
                <div className='mt-3 content-center'>
                    <FontAwesomeIcon icon={faDog} />
                    <span className='px-1 mb-5'>Dog Breed New</span> <br />
                    <FontAwesomeIcon icon={faRupeeSign} />
                    <span className='px-2'>feature price of breed</span>
                </div>
            </div>
            <div className='lg:px-3 py-5 flex-1 mx-10 border-gray-500 shadow-md shadow-gray-500/50 cursor-pointer rounded-lg border-2' >
                <span className='px-1 text-lg font-semibold'> Fish Breeds </span>
                <div className='mt-3 content-center'>
                    <FontAwesomeIcon icon={faFish} />
                    <span className='px-1 mb-5'>Fish Breed New</span> <br />
                    <FontAwesomeIcon icon={faRupeeSign} />
                    <span className='px-2'>feature price of breed</span>
                </div>
            </div>
            <div className='lg:px-3 py-5 flex-1 mx-10 border-gray-500 shadow-md shadow-gray-500/50 cursor-pointer rounded-lg border-2' >
                <span className='px-1 text-lg font-semibold'> Fish Breeds </span>
                <div className='mt-3 content-center'>
                    <FontAwesomeIcon icon={faFish} />
                    <span className='px-1 mb-5'>Fish Breed New</span> <br />
                    <FontAwesomeIcon icon={faRupeeSign} />
                    <span className='px-2'>feature price of breed</span>
                </div>
            </div>
        </div>
    );
}

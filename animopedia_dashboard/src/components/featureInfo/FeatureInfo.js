import React from 'react';
import SetMealOutlinedIcon from '@mui/icons-material/SetMealOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog, faFish, faRupeeSign } from '@fortawesome/free-solid-svg-icons'

export default function FeatureInfo() {
    return (
        <div className='md:px-1 py-2 w-100vh_ flex space justify-between'>
            <div className='md:px-3 py-5 mx-5 flex-1 border-cyan-300 shadow-sm shadow-cyan-500/50 cursor-pointer rounded-lg' >
                <span className='px-1 text-lg'> Dog Breeds </span>
                <div className='mt-5 content-center'>
                    <FontAwesomeIcon icon={faDog} />
                    <span className='px-1 mb-5'>Dog Breed New</span> <br />
                    <FontAwesomeIcon icon={faRupeeSign} />
                    <span className='px-2'>feature price of breed</span>
                </div>
            </div>
            <div className='md:px-3 py-5 flex-1 mx-5 border-cyan-300 shadow-sm shadow-cyan-500/50 cursor-pointer rounded-lg' >
                <span className='px-1 text-lg'> Fish Breeds </span>
                <div className='mt-5 content-center'>
                    <FontAwesomeIcon icon={faFish} />
                    <span className='px-1 mb-5'>Fish Breed New</span> <br />
                    <FontAwesomeIcon icon={faRupeeSign} />
                    <span className='px-2'>feature price of breed</span>
                </div>
            </div>
        </div>
    );
}

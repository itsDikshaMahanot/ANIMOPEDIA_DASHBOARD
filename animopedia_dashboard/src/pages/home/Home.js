import React from 'react';
import FeatureInfo from '../../components/featureInfo/FeatureInfo';

export default function Home() {
    return (
        <div className="bg-gray-100 shadow-md w-screen">
            <div className='md:px-1 py-1 sm:flex-1'>
                <h2 className="text-2xl font-bold leading-7 px-8 py-8 text-gray-900 sm:text-3xl sm:truncate">Information Page</h2>
                <FeatureInfo />
            </div>
        </div >
    );
}

import React from 'react';
import FeatureInfo from '../../components/featureInfo/FeatureInfo';

export default function Home() {
    return (
        <div className='bg-gray-100 w-screen'>
            <div className='py-1 px-2 bg-gray-50 h-[calc(100vh_-_65px)]'>
                <FeatureInfo />
            </div>

        </div>
    );
}

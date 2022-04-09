import React from 'react';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';
import FeatureInfo from '../../components/featureInfo/FeatureInfo';
import DogsLists from '../../components/dogs/DogsLists'

export default function Home() {
    return (
        <div className="bg-gray-500 shadow-md w-full overflow-hidden">
            {/* <div className='md:px-1 py-1 sm:flex-1'>
                <h2 className="text-2xl font-bold leading-7 px-8 py-8 text-gray-900 sm:text-3xl sm:truncate">Information Page</h2>
                <div className=''>
                <FeatureInfo />                
                </div>                
            </div> */}

            <div className='bg-blue-300 pt-0.5 pb-0.5 px-0.5 h-full'>
                <div className='bg-gray-300 px-2 py-1 rounded-md h-full'>
                    hello<br />
                    <div className='bg-red-300'>
                        <Grid container spacing={2}>
                            <Grid item xs={6} md={8}>
                                <Button variant="contained" startIcon={<DeleteIcon />}>Delete me</Button>
                            </Grid>
                        </Grid>

                    </div>

                </div>

            </div>

        </div >
    );
}

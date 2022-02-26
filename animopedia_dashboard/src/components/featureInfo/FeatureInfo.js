import React from 'react';
import SetMealOutlinedIcon from '@mui/icons-material/SetMealOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog, faFish, faRupeeSign } from '@fortawesome/free-solid-svg-icons'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/system';

export default function FeatureInfo() {
    return (
        <div className="px-1 py-2 overflow-hidden">
            <div className='my-2 mx-2  max-h-fit  md:grid grid-rows-3 grid-cols-2 gap-12 sm:flex'>
                <div className='border-gray-100 shadow-md shadow-cyan-500/50 cursor-pointer rounded-lg px-2 py-2 lg:flex-1 mx-1 my-1' >
               
                    <span className='px-1 text-lg font-semibold'> Dog Breeds </span>
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
            </div>
        </div>
    );

}













// import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';


// export default function MediaControlCard() {
//     const theme = useTheme();

//     return (
//         <Card sx={{ display: 'flex' }}>
            // <CardMedia
            //     component="img"
            //     sx={{ width: 151 }}
            //     image="https://hips.hearstapps.com/clv.h-cdn.co/assets/17/29/1500566326-gettyimages-512366437-1.jpg"
            //     alt="Live from space album cover"
            // />
//             <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//                 <CardContent sx={{ flex: '1 0 auto' }}>
//                     <Typography component="div" variant="h5">
//                     Dog Breeds
//                     </Typography>
//                     <Typography variant="subtitle1" color="text.secondary" component="div">
//                         Mac Miller
//                     </Typography>
//                 </CardContent>
//                 {/* <div className='border-gray-500 shadow-md shadow-cyan-500/50 cursor-pointer rounded-lg px-2 py-2 lg:flex-1 mx-1 my-1' >
//                     <div className='mt-3 content-center'>
//                         <FontAwesomeIcon icon={faDog} />
//                         <span className='px-1 mb-5'>Dog Breed New</span> <br />
//                         <FontAwesomeIcon icon={faRupeeSign} />
//                         <span className='px-2'> Feature price of breed</span>
//                     </div>
//                 </div> */}
//             </Box>
            
//         </Card>
//     );
// }

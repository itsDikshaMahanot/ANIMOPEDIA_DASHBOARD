import React from 'react';
import { useState } from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArtTrackOutlinedIcon from '@mui/icons-material/ArtTrackOutlined';
import UpgradeOutlinedIcon from '@mui/icons-material/UpgradeOutlined';
import SetMealOutlinedIcon from '@mui/icons-material/SetMealOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';

function Toggle() {

}

export default function Sidebar() {
    const [isOpened, setIsOpened] = useState(false);
    function Toggle_product() {
        setIsOpened(wasOpened => !wasOpened);
    }
    console.log(isOpened)
    const [product,setProduct ] = useState([
        { title: ' Products Info ', icon: <InfoOutlinedIcon />, id: 1, },
        { title: ' Update ', icon: <UpgradeOutlinedIcon />, id: 2 },
        { title: ' Insert ', icon: <ArtTrackOutlinedIcon />, id: 3 }
    ]);
    const[listopen, setListopen] = useState(false)
    function Listopen (){
        setListopen(listopen => !listopen)
    };
    const [lists, setLists ] = useState([
        { title: ' Dog Lists ', icon: <PetsOutlinedIcon />, id: 1, },
        { title: ' Fish Lists ', icon: <SetMealOutlinedIcon />, id: 2 },
    ]);
    return (
        <div className='flex bg-gray-50 px-1 md:w-60 '>
            <div className='h-[calc(100vh_-_75px)] bg-gray-50 rounded-xl my-1 text-green-600 md:w-56 pl-1 pr-1 sm:w-40'>
                <h3 className='font-bold align-text-top pt-6 pb-4 mx-3 font-serif text-xl text-left border-white'> Dashboard</h3>
                <nav className='px-1 py-1 text-l'>
                    <a href='#' className='px-2 py-2.5 flex space-x-2 hover:bg-green-100 rounded transition duration-200 hover:text-green-500 active:bg-gray-300'>
                        <HomeOutlinedIcon />
                        <h2><span className=' font-serif text-l'>Home</span></h2>
                    </a>
                </nav>
                <h3 className='font-bold align-text-top pt-4 pb-4 mx-3 font-serif text-xl text-left border-white'>
                    <button className='font-bold' onClick={() => Toggle_product()} >
                        {/* <img className="h-5 w-5" src="https://img.icons8.com/ios-glyphs/30/000000/product.png" /> */}
                        Products
                    </button>
                </h3>
                {isOpened && product.map((product, index) => (
                    <nav className='lg:px-3 py-2 text-l ml-2 hover:bg-green-100 rounded transition duration-200 hover:text-green-500 active:bg-gray-300  cursor-pointer ' key={product.id}>
                        {product.icon}
                        {product.title}
                        {/* {product.onClick= handleClick()} */}
                    </nav>
                ))}
                <h3 className='font-bold align-text-top pt-4 pb-4 mx-3 font-serif text-xl text-left border-white'>
                    <button className='font-bold' onClick={() => Listopen()} >
                        Lists
                    </button>
                </h3>
                {listopen && lists.map((lists, index) => (
                    <nav className='lg:px-3 py-2 text-l ml-2 hover:bg-green-100 rounded transition duration-200 hover:text-green-500 active:bg-gray-300  cursor-pointer ' key={lists.id}>
                        {lists.icon}
                        {lists.title}
                    </nav>
                ))}
            </div>
        </div>
    );
}

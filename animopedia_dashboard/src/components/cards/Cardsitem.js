import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css'

function Cardsitem(props) {
    return (
        <>
            <li className='cards_item'>
                <Link to={props.path} className='cards_item_link'>
                    <figure className='cards_item_pic' data-category={props.label}>
                        <img src={props.src} alt="pic-pet" className='cards_item_img' />
                    </figure>
                    <div className='cards_item_info'>
                        <h5 className='cards_item_text' >
                            {props.text}                            
                        </h5>
                    </div>
                </Link>
            </li>


        </>
    )
}

export default Cardsitem
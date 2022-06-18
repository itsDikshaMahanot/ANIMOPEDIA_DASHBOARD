import React from 'react'
import Cardsitem from './Cardsitem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check this to more about your pet's</h1>
            <div className='cards_container'>
                <div className='cards_wrapper'>
                    <ul className='cards_items'>                       
                        <Cardsitem 
                        src='/images/pet.jpg'
                        text='Explore the more on your pets'
                        label='Dogs'
                        path='/dog'
                        />
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default Cards
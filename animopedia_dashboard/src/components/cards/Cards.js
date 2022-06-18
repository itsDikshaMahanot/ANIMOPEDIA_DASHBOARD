import React from 'react'
import Cardsitem from './Cardsitem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check this to know more about your pet's</h1>
            <div className='cards_container'>
                <div className='cards_wrapper'>
                    <ul className='cards_items'>
                        <Cardsitem
                            src='/images/pet.jpg'
                            text='Explore more on your dogs'
                            label='Dogs'
                            path='/dog'
                        />
                        <Cardsitem
                            src='/images/fish.jpg'
                            text='Explore more on your fishs'
                            label='Fishs'
                            path='/fish'
                        />
                        <Cardsitem
                            src='/images/birds.jpg'
                            text='Explore more on your birds'
                            label='Birds'
                            path='/home'
                        />
                        {/* to add cards for any other items to show.. */}
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default Cards
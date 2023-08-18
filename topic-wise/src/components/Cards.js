import React from 'react'
import Card from './Card'
import { cardData } from '../data/cardsData'

function Cards() {
    return (
        <>
            <div className='d-flex flex-wrap justify-content-evenly'>

                {cardData.map((e) => {
                    return <Card data={e} />
                })}

                {cardData.map((e, i) =>
                    <Card data={e} />
                )}

            </div>
        </>
    )
}

export default Cards
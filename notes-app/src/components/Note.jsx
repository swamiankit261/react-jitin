import React from 'react'
import { capitalize } from '../utils/utilityFunction'

function Note(props) {
    // console.log(props.data)
    const { title, content, reminder, option } = props.data

    return (
        <>

            <>
                <div className='p-3 h-100 shadow rounded-4'>
                    <div className=' d-flex flex-column h-100 justify-content-between'>
                        <div>
                            <h4>{capitalize(title)}</h4>
                            <p>{content}</p>
                        </div>

                        <div className='p-2 d-flex justify-content-between'>
                            <div>{option}</div>
                            <div>{reminder}</div>
                        </div>
                    </div>
                </div>

            </>
        </>
    )
}

export default Note
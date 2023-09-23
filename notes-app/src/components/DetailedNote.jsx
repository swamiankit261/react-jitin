import React from 'react'
import { noteIcons } from '../constants/icons';
import { capitalize } from '../utils/utilityFunction';

function DetailedNote({ props }) {
    const { title, content, reminder, option, favroite, id, icon, isDeleted, Pinned } = props.data

    let Icon = noteIcons[icon];



    return (
        <div>
            <div className='p-3 h-100 shadow rounded-4'>
                <div className=' d-flex flex-column h-100 justify-content-between'>
                    <div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    {Icon && <Icon fontSize={20} />}
                                </div>
                                <h4 className='ms-2 m-0'>{capitalize(title)} </h4>
                            </div>
                        </div>
                        <hr />
                    </div>

                    <div className='d-flex flex-column justify-content-between h-100'>

                        <div>
                            <p>{content}</p>
                        </div>
                        <div className='my-2 d-flex justify-content-between'>
                            <div className='btn btn-outline-dark' style={{ cursor: 'none' }}>{option}</div>
                            <div className='btn btn-outline-dark' style={{ cursor: 'none' }}>{reminder}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    // return "abc"
}

export default DetailedNote
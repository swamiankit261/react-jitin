import React from 'react'
import { priorties } from '../utils/priorityData'
import Note from './Note'

function AddNotes() {
    return (

        <>
            <div className='d-flex'>

                <div>
                    <div>
                        <label> Title </label>
                        <input className='form-control' type="text" placeholder='Note ka title likho' />
                    </div>
                    <div>
                        <label> Content </label>
                        <input className='form-control' type="text" placeholder='Pura likho' />
                    </div>
                    <div>
                        <label> Reminder Date </label>
                        <input className='form-control' type="date" placeholder='Kb yaad dilaaun' />
                    </div>
                    <div>
                        <label> Priority </label>
                        <select className='form-control'>
                            {priorties.map((e, i) => (
                                <option value={e} key={i}>{e}</option>
                            ))}
                        </select>
                    </div>
                    <div className='m-4'>
                        <button className='btn btn-dark btn-sm me-2'>Reset</button>
                        <button className='btn btn-dark btn-sm'>Add note</button>
                    </div>
                </div>
                <div></div>
                <Note />
            </div>
        </>
    )
}

export default AddNotes
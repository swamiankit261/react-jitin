import React, { useEffect, useState } from 'react'
import { priorties } from '../utils/priorityData'
import Note from './Note'
import { useLocation, useNavigate } from 'react-router-dom'

function AddNotes() {
    const [note, setNote] = useState({ option: "Medium" })
    const [editIndex, setEditIndex] = useState(-1);

    const navigate = useNavigate();

    const location = useLocation();

    console.log(location)
    const ram = (e) => {
        note[e.target.name] = e.target.value
        setNote({ ...note })
    }

    const handleSubmit = () => {
        const storageNotes = JSON.parse(localStorage.getItem('notes')) || []

        if (editIndex >= 0) {
            storageNotes[editIndex] = note
        } else {
            storageNotes.push(note)
        }

        localStorage.setItem('notes', JSON.stringify(storageNotes))
        navigate('/')
    }

    const reset = () => {
        setNote({ title: '', content: '', reminder: '', option: '' })
    }

    useEffect(() => {
        if (location?.state?.data) {
            setNote(location?.state?.data)
            setEditIndex(location?.state?.index)
        }
    }, [])

    return (
        <>
            <div>
                <div className='row main' >

                    <div className='col-md-8 p-2 '>
                        <div className='m-2'>
                            <label className='lable'> Title </label>
                            <input className='form-control' type="text" name='title' placeholder='Note ka title likho' value={note.title} onChange={ram} />
                        </div>
                        <div className='m-2'>
                            <label className='lable'> Content </label>
                            <textarea className='form-control' name='content' placeholder='Pura likho' value={note.content} onChange={ram} />
                        </div>
                        <div className='m-2'>
                            <label className='lable'> Reminder Date </label>
                            <input className='form-control' type="date" name='reminder' placeholder='Kb yaad dilaaun' value={note.reminder} onChange={ram} />
                        </div>
                        <div className='m-2'>
                            <label className='lable'> Priority </label>
                            <select className='form-control' name='option' value={note.option} onChange={ram}>
                                {priorties.map((e, i) => (
                                    <option option value={e} key={i} >{e}</option>
                                ))}
                            </select>
                        </div>
                        <div className='m-2 mt-4'>
                            <button className='btn btn-dark btn-sm me-2' onClick={reset}>Reset</button>
                            <button onClick={handleSubmit} className='btn btn-dark btn-sm'>{editIndex >= 0 ? "Update Note" : "Add note"}</button>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <h6 className='text-secondary'>Example Note</h6>
                        <Note data={note} />
                    </div>
                </div>
            </div >

        </>
    )
}

export default AddNotes
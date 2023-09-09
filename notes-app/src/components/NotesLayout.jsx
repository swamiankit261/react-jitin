import React, { useEffect, useState } from 'react'
import Notes from './Notes'
import { BiBraille } from 'react-icons/bi'
import { getAllStorageNotes } from '../utils/storageOperations'

function NotesLayout() {
    const [notes, setNotes] = useState([])

    const chooseNotes = (tab) => {
        if (tab === 0) {
            setNotes(getAllStorageNotes)
        } else if (tab === 1) {
            setNotes([]);
        } else if (tab === 2) {
            setNotes([]);
        }
    }

    useEffect(() => {
        setNotes(getAllStorageNotes())
    }, [])

    return (
        <div className='h-100'>

            <div>
                <button onClick={() => chooseNotes(0)}>All</button>
                <button onClick={() => chooseNotes(1)}>Favourite</button>
                <button onClick={() => chooseNotes(2)}>Pinned</button>
            </div>

            {notes.length == 0 &&
                <div className='h-100 d-flex align-items-center justify-content-center'>
                    <div className='text-center'>
                        <BiBraille fontSize={30} color='#FF9800' />
                        <h5>Koi note nahi h</h5>
                    </div>
                </div>
            }

            <Notes notes={notes} setNotes={setNotes} />
        </div>
    )
}

export default NotesLayout
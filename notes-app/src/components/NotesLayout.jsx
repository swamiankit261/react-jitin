import React, { useEffect, useState } from 'react'
import Notes from './Notes'
import { BiBraille } from 'react-icons/bi'


function NotesLayout() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        let storageNotes = JSON.parse(localStorage.getItem('notes')) || []
        setNotes(storageNotes)
    }, [])

    return (
        <div className='h-100'>
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
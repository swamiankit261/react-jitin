import React, { useEffect, useState } from 'react'
import Notes from './Notes'

function NotesLayout() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        let storageNotes = JSON.parse(sessionStorage.getItem('notes')) || []
        console.log(storageNotes)
        setNotes(storageNotes)
    }, [])

    return (
        <div>
            <Notes notes={notes} />
        </div>
    )
}

export default NotesLayout
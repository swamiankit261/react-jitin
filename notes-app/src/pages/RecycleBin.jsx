import React from 'react'
import Notes from '../components/Notes'
import { useEffect } from 'react'
import { useState } from 'react'
import { getDeletedNotes } from '../utils/storageOperations'

function RecycleBin() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        setNotes(getDeletedNotes())
    }, [])

    return (
        <div>
            <Notes notes={notes} setNotes={setNotes} />
        </div>
    )
}

export default RecycleBin
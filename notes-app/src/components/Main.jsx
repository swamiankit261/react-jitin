import React from 'react'
import AddNotes from './AddNotes'
import Notes from './Notes'
import { Route, Routes } from 'react-router-dom'

function Main() {
    return (
        <>
            <Routes>
                <Route path='/addNotes' element={<AddNotes />} />
                <Route path='/notes' element={<Notes />} />
            </Routes>

        </>
    )
}

export default Main
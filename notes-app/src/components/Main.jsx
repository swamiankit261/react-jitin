import React from 'react'
import AddNotes from './AddNotes'
import { Route, Routes } from 'react-router-dom'
import NotesLayout from './NotesLayout'

function Main() {
    return (
        <>
            <Routes>
                <Route path='/addNotes' element={<AddNotes />} />
                <Route path='/notes' element={<NotesLayout />} />
            </Routes>
        </>
    )
}

export default Main
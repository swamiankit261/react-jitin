import React from 'react'
import AddNotes from './AddNotes'
import { Route, Routes, useNavigate } from 'react-router-dom'
import NotesLayout from './NotesLayout'

function Main() {

    return (
        <>
            <Routes>
                <Route path='/' element={<NotesLayout />} />
                <Route path='/addNotes' element={<AddNotes />} />
            </Routes>
        </>
    )
}

export default Main
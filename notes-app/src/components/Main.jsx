import React from 'react'
import AddNotes from './AddNotes'
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import NotesLayout from './NotesLayout'
import { PiNotebookDuotone } from 'react-icons/pi'
import RecycleBin from '../pages/RecycleBin'
import Table from './Table'
import TableView from './TableView'

function Main() {

    const location = useLocation();

    return (
        <>
            {location.pathname !== '/addNotes' &&
                <Link to='/addNotes' className='p-3 rounded-3 my_third_bg d-flex align-items-center add_note_top'>
                    <PiNotebookDuotone fontSize={20} className='me-2' />Naya note banao
                </Link>
            }

            <Routes>
                <Route path='/' element={<NotesLayout />} />
                <Route path='/addNotes' element={<AddNotes />} />
                <Route path='/recycleBin' element={<RecycleBin />} />
                <Route path='/table' element={<TableView />} />
            </Routes>
        </>
    )
}

export default Main
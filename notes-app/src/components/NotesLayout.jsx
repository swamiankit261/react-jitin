import React, { useEffect, useState } from 'react'
import Notes from './Notes'
import { BiBraille } from 'react-icons/bi'
import { getFavroiteNotes, getPinnedNotes, getUndeletedNotes } from '../utils/storageOperations'
import TableView from './TableView'
import { HiViewGrid, HiViewList } from 'react-icons/hi'

function NotesLayout() {
    const [notes, setNotes] = useState([])
    const [tab, setTab] = useState(0)
    const [view, setView] = useState('TABLE')
    // let Storage = getAllStorageNotes()
    // let favroite = Storage.filter(note => note.favroite)

    const chooseNotes = (value) => {
        value === 0 && setNotes(getUndeletedNotes());
        value === 1 && setNotes(getFavroiteNotes());
        value === 2 && setNotes(getPinnedNotes());

        setTab(value);
    }

    useEffect(() => {
        setNotes(getUndeletedNotes())
    }, [])

    return (
        <div className='h-100'>

            <div className='mt-2 d-flex justify-content-between'>
                <div>
                    <button className={`btn my_secondary_bg text-white ${tab === 0 && 'activeTab'}`} onClick={() => chooseNotes(0)}>All</button>
                    <button className={`btn mx-2 my_secondary_bg text-white ${tab === 1 && 'activeTab'}`} onClick={() => chooseNotes(1)}>Favourite</button>
                    <button className={`btn my_secondary_bg text-white ${tab === 2 && 'activeTab'}`} onClick={() => chooseNotes(2)}>Pinned</button>
                </div>
                <div>
                    <button className={`btn btn-sm view_icon mx-1 ${view === "CARD" && "active_view_icon"}`} style={{ padding: '0px' }} onClick={() => setView('CARD')}> <HiViewGrid fontSize={25} /> </button>
                    <button className={`btn btn-sm view_icon ${view === "TABLE" && "active_view_icon"}`} style={{ padding: '0px' }} onClick={() => setView('TABLE')}><HiViewList fontSize={25} /></button>
                </div>
            </div>

            <hr />

            {notes.length === 0 &&
                <div className='h-100 d-flex align-items-center justify-content-center'>
                    <div className='text-center'>
                        <BiBraille fontSize={30} color='#FF9800' />
                        <h5>Koi note nahi h</h5>
                    </div>
                </div>
            }

            {view === 'CARD' && <Notes notes={notes} setNotes={setNotes} tab={tab} />}
            {view === 'TABLE' && <TableView notes={notes} setNotes={setNotes} tab={tab} />}

        </div>
    )
}

export default NotesLayout
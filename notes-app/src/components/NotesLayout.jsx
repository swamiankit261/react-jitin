import React, { useEffect, useState } from 'react'
import Notes from './Notes'
import { BiBraille } from 'react-icons/bi'
import { getFavroiteNotes, getPinnedNotes, getUndeletedNotes } from '../utils/storageOperations'

function NotesLayout() {
    const [notes, setNotes] = useState([])
    const [tab, setTab] = useState(0)
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

            <div className='mt-2'>
                <button className={`btn my_secondary_bg text-white ${tab === 0 && 'activeTab'}`} onClick={() => chooseNotes(0)}>All</button>
                <button className={`btn mx-2 my_secondary_bg text-white ${tab === 1 && 'activeTab'}`} onClick={() => chooseNotes(1)}>Favourite</button>
                <button className={`btn my_secondary_bg text-white ${tab === 2 && 'activeTab'}`} onClick={() => chooseNotes(2)}>Pinned</button>
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

            <Notes notes={notes} setNotes={setNotes} tab={tab} />
        </div>
    )
}

export default NotesLayout
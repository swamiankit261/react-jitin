import React from 'react'
import Note from './Note'

function Notes({ notes, setNotes, tab }) {
    return (
        <div className='row my_fifth_color'>
            {notes.map((e, i) => (
                <div className='col-md-4 mt-4' key={i}>
                    <Note data={e} index={i} setNotes={setNotes} tab={tab} />
                </div>
            ))}
        </div>
    )
}

export default Notes
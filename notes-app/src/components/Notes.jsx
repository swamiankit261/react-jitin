import React from 'react'
import Note from './Note'

function Notes({ notes }) {
    return (
        <div className='row'>
            {notes.map((e, i) => (
                <div className='col-md-4 mt-4' key={i}>
                    <Note data={e} />
                </div>
            ))}
        </div>
    )
}

export default Notes
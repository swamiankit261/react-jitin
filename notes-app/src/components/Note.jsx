import React from 'react'
import { capitalize } from '../utils/utilityFunction'
import { AiFillDelete } from 'react-icons/ai';

function Note(props) {
    // console.log(props.data)
    const { title, content, reminder, option } = props.data
    const { setNotes, index } = props

    // console.log(props)
    const handleDelete = () => {
        const storageNotes = JSON.parse(localStorage.getItem('notes'))
        storageNotes.splice(index, 1)
        localStorage.setItem('notes', JSON.stringify(storageNotes))

        setNotes(storageNotes)
    }

    return (
        <>
            <div className='p-3 h-100 shadow rounded-4'>
                <div className=' d-flex flex-column h-100 justify-content-between'>
                    <div>
                        <h4>{capitalize(title)}</h4>
                        <p>{content}</p>
                    </div>

                    <div className='p-2 d-flex justify-content-between'>
                        <div>{option}</div>
                        <div>{reminder}</div>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <div onClick={handleDelete}> <AiFillDelete fontSize={20} cursor='pointer' color='#fc548f' /> </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Note
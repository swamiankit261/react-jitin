import React from 'react'
import { capitalize } from '../utils/utilityFunction'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Note(props) {
    // console.log(props.data)
    const { title, content, reminder, option } = props.data
    const { setNotes, index } = props


    const handleDelete = () => {
        const storageNotes = JSON.parse(localStorage.getItem('notes'))
        storageNotes.splice(index, 1)
        localStorage.setItem('notes', JSON.stringify(storageNotes))

        setNotes(storageNotes)
    }

    // const handleEdit

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
                        <Link to='/addNotes' state={{ data: props.data  , index: index }} className='mx-2'> <AiFillEdit fontSize={20} cursor='pointer' color='#8eb3c1' /> </Link>
                        <div onClick={handleDelete}> <AiFillDelete fontSize={20} cursor='pointer' color='#fc548f' /> </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Note
import React from 'react'
import { capitalize } from '../utils/utilityFunction'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { Link } from 'react-router-dom';
import { getAllStorageNotes, getFavroiteNotes, getPinnedNotes, makeNoteFavorite, makeNotePinned, setStorageNotes } from '../utils/storageOperations'
import { VscPinned } from 'react-icons/vsc'
import { noteIcons } from '../constants/icons';

function Note(props) {
    const { title, content, reminder, option, favroite, id, icon } = props.data
    const { setNotes, index, tab } = props

    const handleDelete = () => {
        const storageNotes = getAllStorageNotes();
        storageNotes.splice(index, 1);
        setStorageNotes(storageNotes);
        setNotes(storageNotes);
    }

    const handleFavorite = () => {
        makeNoteFavorite(id)
        tab === 0 && setNotes(getAllStorageNotes());
        tab === 1 && setNotes(getFavroiteNotes());
    }

    const handlePinned = () => {
        makeNotePinned(index)

        tab === 0 && setNotes(getAllStorageNotes());
        tab === 1 && setNotes(getPinnedNotes());
    }

    let Icon = noteIcons[icon];

    // const handleEdit
    return (
        <>
            <div className='p-3 h-100 shadow rounded-4'>
                <div className=' d-flex flex-column h-100 justify-content-between'>
                    <div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='d-flex justify-content-between align-items-center'>


                                {Icon && <Icon fontSize={20} />}

                                <h4 className='ms-2 m-0'>{capitalize(title)} </h4>
                            </div>
                            <div>
                                <VscPinned onClick={handlePinned} fontSize={15} cursor={"pointer"} color='#79bdd6' />

                                {favroite ? <MdFavorite onClick={handleFavorite} cursor='pointer' color='#fc548f' fontSize={20} />
                                    :
                                    <MdFavoriteBorder onClick={handleFavorite} cursor='pointer' fontSize={20} />
                                }
                            </div>
                        </div>
                        <p>{content}</p>
                    </div>

                    <div className='p-2 d-flex justify-content-between'>
                        <div>{option}</div>
                        <div>{reminder}</div>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <Link to='/addNotes' state={{ data: props.data, index: index }} className='mx-2'> <AiFillEdit fontSize={20} cursor='pointer' color='#8eb3c1' /> </Link>
                        <div onClick={handleDelete}> <AiFillDelete fontSize={20} cursor='pointer' color='#fc548f' /> </div>
                    </div>
                </div>
            </div >

        </>
    )
}

export default Note
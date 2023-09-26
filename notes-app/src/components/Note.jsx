import React from 'react'
import { capitalize } from '../utils/utilityFunction'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdFavorite, MdFavoriteBorder, MdOutlineSettingsBackupRestore } from 'react-icons/md'
import { Link } from 'react-router-dom';
import { deletePermanently, getDeletedNotes, getFavroiteNotes, getPinnedNotes, getUndeletedNotes, makeNoteFavorite, makeNotePinned, moveToRecyleBin, restoreNote } from '../utils/storageOperations'
import { VscPinned } from 'react-icons/vsc'
import { noteIcons } from '../constants/icons';
import { TbPinnedFilled } from 'react-icons/tb';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import ReactDOMServer from 'react-dom/server';
import DetailedNote from './DetailedNote';

function Note(props) {
    const { title, content, reminder, option, favroite, id, icon, isDeleted, Pinned } = props.data
    const { setNotes, index, tab } = props

    const handleDelete = (e) => {
        e.stopPropagation()
        if (isDeleted) {

            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    deletePermanently(id);
                    setNotes(getDeletedNotes())
                }
            })

        } else {
            moveToRecyleBin(id);
            setNotes(getUndeletedNotes())

            tab === 0 && setNotes(getUndeletedNotes());
            tab === 1 && setNotes(getFavroiteNotes());
            tab === 2 && setNotes(getPinnedNotes());
            toast.success('Moved to recycle bin', {
                icon: '👏'
            })
        }
    }

    const restoreNoteL = (e) => {
        e.stopPropagation()
        restoreNote(id);
        setNotes(getDeletedNotes());
        toast.success('succesfully restored your notes', {
            icon: '👏'
        });
    }

    const handleFavorite = (e) => {
        e.stopPropagation()
        makeNoteFavorite(id);

        tab === 0 && setNotes(getUndeletedNotes());
        tab === 1 && setNotes(getFavroiteNotes());
        tab === 2 && setNotes(getPinnedNotes());
    }

    const handlePinned = (e) => {
        e.stopPropagation();
        makeNotePinned(id);

        tab === 0 && setNotes(getUndeletedNotes());
        tab === 1 && setNotes(getFavroiteNotes());
        tab === 2 && setNotes(getPinnedNotes());
    }

    let Icon = noteIcons[icon];

    const showDetails = () => {
        Swal.fire({
            html: ReactDOMServer.renderToString(<DetailedNote props={props} />),
            width: "50%",
            showConfirmButton: false
        })
    }

    // const handleEdit
    return (
        <>
            <div className='p-3 h-100 shadow rounded-4' onClick={showDetails}>
                <div className=' d-flex flex-column h-100 justify-content-between'>
                    <div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    {Icon && <Icon fontSize={20} />}
                                </div>
                                <h4 className='ms-2 m-0'>{capitalize(title)} </h4>
                            </div>
                            <div>

                                {Pinned ?
                                    <TbPinnedFilled onClick={handlePinned} fontSize={20} cursor={"pointer"} color='#79bdd6' />
                                    :
                                    <VscPinned onClick={handlePinned} fontSize={20} cursor={"pointer"} color='#79bdd6' />
                                }

                                {favroite ?
                                    <MdFavorite onClick={handleFavorite} cursor='pointer' color='#fc548f' fontSize={20} />
                                    :
                                    <MdFavoriteBorder onClick={handleFavorite} cursor='pointer' fontSize={20} />
                                }
                            </div>
                        </div>
                        <hr />
                    </div>

                    <div className='d-flex flex-column justify-content-between h-100'>

                        <div>

                            <p>{content?.length > 100 ? content?.substr(0, 100) + '...' : content}</p>
                        </div>
                        <div className='my-2 d-flex justify-content-between'>

                            <div>{option}</div>
                            <div>{reminder}</div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-end'>
                        {isDeleted && <div onClick={restoreNoteL}> <MdOutlineSettingsBackupRestore fontSize={20} cursor='pointer' color='#8eb3c1' /> </div>}
                        {!isDeleted && <Link to='/addNotes' state={{ data: props.data, index: index }} className='mx-2'> <AiFillEdit fontSize={20} cursor='pointer' color='#8eb3c1' /> </Link>}
                        <div onClick={handleDelete}> <AiFillDelete fontSize={20} cursor='pointer' color='#fc548f' /> </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Note
import React from 'react'
import Table from './Table'
import { getFavroiteNotes, getPinnedNotes, getUndeletedNotes, makeNoteFavorite, makeNotePinned } from '../utils/storageOperations'
import { VscPinned } from 'react-icons/vsc'
import { TbPinnedFilled } from 'react-icons/tb'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'

function TableView({ notes, setNotes, tab }) {

    const colunms = [
        {
            lable: "Title",
            render: (row) => {
                return row.title?.length > 25 ? row.title?.slice(0, 25) + "..." : row.title
            }
        },
        {
            lable: "Content",
            render: (row) => {
                return row.content?.length > 50 ? row.content?.slice(0, 50) + "..." : row.content
            }
        },
        {
            lable: "Priority",
            key: "option",
        },
        {
            lable: "Reminder",
            key: "reminder",
        },
        {
            lable: "Pinned",
            render: (row) => {
                return row.Pinned ?
                    <TbPinnedFilled onClick={() => handlePinned(row.id)} fontSize={20} cursor={"pointer"} color='#79bdd6' />
                    :
                    <VscPinned onClick={() => handlePinned(row.id)} fontSize={20} cursor={"pointer"} color='#79bdd6' />
            }
        },
        {
            lable: "Favroite",
            key: "favroite",
            render: (row) => {
                return row.favroite ?
                    <MdFavorite onClick={() => handleFavorite(row.id)} cursor='pointer' color='#fc548f' fontSize={20} />
                    :
                    <MdFavoriteBorder onClick={() => handleFavorite(row.id)} cursor='pointer' fontSize={20} />
            }
        },
    ]

    const handlePinned = (id) => {
        makeNotePinned(id);

        tab === 0 && setNotes(getUndeletedNotes());
        tab === 1 && setNotes(getFavroiteNotes());
        tab === 2 && setNotes(getPinnedNotes());
    }

    const handleFavorite = (id) => {
        makeNoteFavorite(id)
        tab === 0 && setNotes(getUndeletedNotes());
        tab === 1 && setNotes(getFavroiteNotes());
        tab === 2 && setNotes(getPinnedNotes());
    }
    return (
        <div>
            <Table columns={colunms} rows={notes} />
        </div>
    )
}

export default TableView
import React from 'react'

function Table({ columns = [], rows = [] }) {
    return (
        <>
            <table className='table table-border '>
                <thead>
                    <tr>
                        <th className='bg-transparent'>No.</th>
                        {columns.map((column, i) => {
                            return <th className='bg-transparent' key={i}>{column.lable}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => {
                        return <tr key={i} >
                            <td className='bg-transparent'>{i + 1}</td>
                            {columns.map((column, coli) => {
                                if (column.render) {
                                    return <td className='bg-transparent'>{column.render(row)}</td>
                                } else {
                                    return <td className='bg-transparent' key={coli}>{row[column.key]}</td>
                                }
                            })}
                        </tr>
                    })}

                </tbody>
            </table>
        </>
    )
}

export default Table


// const columns = [
//     {
//         lable: 'Name',
//         key: 'name',
//     },
//     {
//         lable: 'Roll No',
//         key: 'rollNo',
//     },
//     {
//         lable: 'Age',
//         key: 'age',
//     },
// ]

// const rows = [
//     {
//         name: 'deepu',
//         age: 36,
//         rollNo: 123
//     },
//     {
//         name: 'ankit',
//         age: 69,
//         rollNo: 987
//     },
//     {
//         name: 'jitin',
//         age: 23,
//         rollNo: 897
//     },
//     {
//         name: 'sandeep',
//         age: 12,
//         rollNo: 345
//     },

// ]
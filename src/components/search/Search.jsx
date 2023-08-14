import React from 'react'
import { movies } from './data'
import { useState } from 'react'

const Search = () => {

    const [text, setText] = useState('')
    const [searchmovie, setsearchmovie] = useState([])

    const handleSearch = (e) => {
        let arr = []
        movies.forEach(movie => {
            if (movie.includes(e.target.value)) {
                arr.push(movie)
            }
        })
        setsearchmovie(arr)
    }

    return (
        <>
            <div className="container m-4">
                <div className="row justify-content-evenly">
                    <div className="col-md-4 shadow p-3 rounded-3">
                        <input
                            type="search"
                            className='form-control'
                            placeholder='search here'
                            onChange={handleSearch}
                        />
                        <ol>



                            <div className='container'>

                                {searchmovie.map((e, i) => {
                                    return <li>{e} </li>
                                })}
                            </div>

                        </ol>
                    </div>
                    <div className="col-md-4 shadow p-3 rounded-3">
                        <ol>
                            {movies.map((e, i) => {
                                return <li key={i}>{e}</li>
                            })}
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search
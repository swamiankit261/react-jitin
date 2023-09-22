import React, { useEffect } from 'react'
import { movies } from './data'
import { useState } from 'react'

const Search = () => {

    const [searchmovie, setsearchmovie] = useState([])
    const [genres, setGenres] = useState([])

    const onsearchchange = (e) => {
        const result = movies.filter((movie) => {
            return (
                movie.genre.toLowerCase() == e.target.value.toLowerCase()
            )
        })

        setsearchmovie(result)
    }

    const handleSearch = (e) => {
        // let arr = []
        // movies.forEach(movie => {]
        //     if (movie.includes(e.target.value)) {
        //         arr.push(movie)
        //     }
        // })
        // setsearchmovie(arr)

        const result = movies.filter((movie) => {
            return (
                movie.name
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
            )
        })

        setsearchmovie(result)
    }

    function getGenres() {
        let genresL = []

        movies.forEach(movie => {
            if (!genresL.includes(movie.genre)) {
                genresL.push(movie.genre)
            }
        })

        setGenres(genresL)
    }

    useEffect(() => {
        getGenres()
    }, [])

    return (
        <>
            <div className="container m-4">
                <div className="row justify-content-evenly">
                    <div className="col-md-2 shadow p-3 rounded-3">

                        <select className='form-control' onChange={onsearchchange}>
                            {genres.map(genre => {
                                return <option value={genre} >{genre}</option>
                            })}
                        </select>

                    </div>
                    <div className="col-md-4 shadow p-3 rounded-3">
                        <input
                            type="search"
                            className='form-control'
                            placeholder='search here'
                            onChange={handleSearch}
                        />
                        <ol className='mt-3'>
                            {/* {searchmovie} */}
                            {searchmovie.map((e, i) => {
                                return (
                                    <li key={i} className='d-flex justify-content-between'>
                                        <div>
                                            {e.name}
                                        </div>
                                        <div style={{ fontSize: '12px' }} className='text-secondary'>
                                            {e.genre}
                                        </div>
                                    </li>
                                )
                            })}
                        </ol>
                    </div>
                    <div className="col-md-4 shadow p-3 rounded-3">
                        <ol>
                            {movies.map((e, i) => {
                                return (
                                    <li key={i} className='d-flex justify-content-between'>
                                        <div>
                                            {e.name}
                                        </div>
                                        <div style={{ fontSize: '12px' }} className='text-secondary'>
                                            {e.genre}
                                        </div>
                                    </li>
                                )
                            })}
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search
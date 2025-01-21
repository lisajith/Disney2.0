import React from 'react'
import GenresList from '../Constant/GenresList'
import MovieList from './MovieList'

function GenreMovieList() {

  return (
    <div>
        {GenresList.genre.map((genre,index) => /*index < 5 && */ (
            <div key={index} className='p-8 px-8 md:px-16'>
                <h1 className='text-[20px] text-blue-200 font-bold'>{genre.name}</h1>
                <MovieList genreId = {genre.id} index_ = {index}/>
            </div>
        ))}
    </div>
  )
}

export default GenreMovieList
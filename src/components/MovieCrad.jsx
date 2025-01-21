import React from 'react'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original'

function MovieCrad({movie}) {
  return (
    <>
        <img className='shadow-gray-950 shadow-lg hover:shadow-sm hover:shadow-violet-700 w-[110px] md:w-[200px] rounded-lg hover:border-[3px] border-blue-100 hover:scale-110 transition-all duration-150 ease-in-out cursor-pointer' src={IMAGE_BASE_URL+movie.poster_path}/>
    </>
  )
}

export default MovieCrad
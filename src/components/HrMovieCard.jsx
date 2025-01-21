import React from 'react'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original'

function HrMovieCard({movie}) {
  return (
    <section className='ml-5 hover:scale-110 transition-all duration-150 ease-in-out'>
        <img className='shadow-gray-950 shadow-lg hover:shadow-sm hover:shadow-violet-700 w-[110px] md:w-[250px] rounded-lg hover:border-[3px] border-blue-100 hover:scale-110 transition-all duration-150 ease-in-out cursor-pointer' src={IMAGE_BASE_URL+movie.backdrop_path}/>
        <h1 className='w-[110px] md:w-[250px] mt-2 text-white'>{movie.title}</h1>
    </section>
  )
}

export default HrMovieCard
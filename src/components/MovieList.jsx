import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCrad from './MovieCrad'
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5"
import HrMovieCard from './HrMovieCard'

function MovieList({genreId, index_}) {
    const [ width, setWidth ] = useState(window.innerWidth)
    const [ movieList, setMovieList ] = useState([])
    const elementRef = useRef(null)

    useEffect(() => {
        window.addEventListener("resize", handelResize)
        getMovieByGenresId()
    })
    const getMovieByGenresId = () => {
        GlobalApi.getMovieByGenresId(genreId).then(resp=>{
            setMovieList(resp.data.results)
        })
    }
    function handelResize(){
        setWidth(window.innerWidth)
    }
    const slideLeft = (element) => {
        element.scrollLeft-= width-696
    }
    const slideRight = (element) => {
        element.scrollLeft+= width-696
    }

  return (
    <div className='relative'>
        <IoChevronBackOutline onClick={() => slideLeft(elementRef.current)} className={`text-white text-[50px] p-2 z-10 cursor-pointer hidden md:block absolute ${index_ % 3 == 0 ? 'mt-[70px]' : 'mt-[150px]'}`}/>
        <div ref={elementRef} className='flex gap-8 p-5 px-3 scrollbar-hide overflow-x-auto scroll-smooth'>
            {movieList.map((movie,index) => (
                index_ % 3 === 0 ? <HrMovieCard movie = {movie} /> : <MovieCrad key={index} movie = {movie}/>
            ))}
        <IoChevronForwardOutline onClick={() => slideRight(elementRef.current)} className={`text-white text-[50px] p-2 z-10 cursor-pointer hidden md:block absolute right-0 top-0 ${index_ % 3 == 0 ? 'mt-[70px]' : 'mt-[150px]'}`}/>
        </div>
    </div>
  )
}

export default MovieList
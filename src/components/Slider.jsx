import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original'
function Slider() {
    const [ width, setWidth ] = useState(window.innerWidth)
    const [ movieList, setMovieList ] = useState([])
    const elementRef = useRef()
    useEffect(() => {
        window.addEventListener("resize", handelResize)
        getTrendingMovies()
    }, [])
    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos.then(resp => {
            setMovieList(resp.data.results)
        })
    }
    function handelResize(){
        setWidth(window.innerWidth)
    }
    const sliderRight = (element) => {
        element.scrollLeft += width-110
    }
    const sliderLeft = (element) => {
        element.scrollLeft -= width-110
    }
  return (
    <div className=''>
        <HiChevronLeft onClick={() => sliderLeft(elementRef.current)} className='hidden md:block absolute text-white text-3xl mx-8 mt-[175px] cursor-pointer'/>
        <HiChevronRight onClick={() => sliderRight(elementRef.current)} className='hidden md:block absolute text-white text-3xl right-0 mx-8 mt-[175px] cursor-pointer'/>
        <div className='scroll-smooth scrollbar-hide flex overflow-x-auto px-16 py-4' ref={elementRef}>
            {movieList.map((movie, index) => (
                <img className='hover:border-[3px] border-gray-400 transition-all duration-100 ease-in rounded-md mr-[20px] min-w-full md:h-[310px] object-left-top object-cover' key={index} src={IMAGE_BASE_URL+movie.backdrop_path}/>
            ))}
        </div>
    </div>
  )
}
export default Slider
import React from 'react'

import disney from '../assets/images/disney.png'
import pixar from '../assets/images/pixar.png'
import marvel from '../assets/images/marvel.png'
import starwars from '../assets/images/starwars.png'
import natGeo from '../assets/images/natGeo.png'

import disneyV from '../assets/videos/disney.mp4'
import pixarV from '../assets/videos/pixar.mp4'
import marvelV from '../assets/videos/marvel.mp4'
import starwarsV from '../assets/videos/starwars.mp4'
import natGeoV from '../assets/videos/natGeo.mp4'

function ProductionHouse() {
    const productionHouseList = [ { id: 1, image: disney, video: disneyV },
                                  { id: 2, image: pixar, video: pixarV },
                                  { id: 3, image: marvel, video: marvelV },
                                  { id: 4, image: starwars, video: starwarsV },
                                  { id: 5, image: natGeo, video: natGeoV }]
  return (
    <div className='flex gap-2 md:gap-5 transition-all duration-[1s] p-2 px-5 md:px-16'>
        {productionHouseList.map((production,index) => (
            <div className='cursor-pointer border-blue-800 border-[2px] hover:border-blue-400 rounded-lg hover:scale-110 duration-300 ease-in-out transition-all relative shadow-xl shadow-gray-950 hover:shadow-lg hover:shadow-violet-700' key={index}>
            <video className='absolute bottom-0 rounded-md z-0 opacity-0 hover:opacity-50' src={production.video} autoPlay loop playsInline muted/> 
            <img className='w-full z-[1]' src={production.image}/>
            </div>
        ))}
    </div>
  ) 
}

export default ProductionHouse
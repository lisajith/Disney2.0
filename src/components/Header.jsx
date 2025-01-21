import React, { useState } from 'react'
import logo from '../assets/images/groot.jpg'
import { HiHome, HiMagnifyingGlass, HiPlayCircle, HiStar, HiTv } from 'react-icons/hi2'
import { HiPlus, HiDotsVertical } from 'react-icons/hi'
import HeaderItems from './HeaderItems'
import '../App.css'

function Header() {
    const [ toggle, setToggle ] = useState(false)
    const menu = [ { name: 'HOME', icon: HiHome },
                   { name: 'SEARCH', icon: HiMagnifyingGlass },
                   { name: 'WATCH LIST', icon: HiPlus },
                   { name: 'ORIGINALS', icon: HiStar },
                   { name: 'MOVIES', icon: HiPlayCircle },
                   { name: 'SERIES', icon: HiTv }
                 ]

  return (
    <div className='hover:shadow-[#747bff34] shadow-lg duration-500 flex items-center justify-between p-5'>
        <div className='flex gap-8 items-center'>
            <img className='duration-[1s] w-[60px] md:w-[80px] object-cover' src='https://i0.wp.com/www.tech-wd.com/wd/wp-content/uploads/2019/03/1200px-Disney_logo.svg_.png?resize=1024%2C594&ssl=1' alt='logo'/>
            <ol className='hidden md:flex gap-8'>
                {menu.map((item, index) => (
                    <li key={index}><HeaderItems name = {item.name} Icon = {item.icon}/></li>
                ))}
            </ol>
            <ol className='md:hidden flex gap-5'>
                {menu.map((item, index) => index < 3 && (
                    <li key={index}><HeaderItems name = {''} Icon = {item.icon}/></li>
                ))}
            </ol>
            <div className='md:hidden flex gap-8 dots' onClick={() => setToggle(!toggle)}>
                <HeaderItems name={''} Icon = {HiDotsVertical}/>
                {
                    toggle ? 
                                <ol className='myTheme absolute mt-[40px] bg-[#121212] p-3 border-[1px] border-gray-700 rounded-[10px] px-5 py-4 dropdown'>
                                    {menu.map((item, index) => index > 2 && (
                                        <li key={index}><HeaderItems name = {item.name} Icon = {item.icon}/></li>
                                    ))}
                                </ol> 
                            : 
                                null
                }
            </div>
        </div>
        <img className='w-[50px] rounded-full' src={logo} />
    </div>
  )
}

export default Header
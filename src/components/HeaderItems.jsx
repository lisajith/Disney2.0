import React from 'react'

function HeaderItems({name, Icon}) {
  return (
    <div className='text-white flex items-center gap-2 text-[16px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-[5px]'>
        <Icon />
        <h2>{name}</h2>
    </div>
  )
}

export default HeaderItems
import React from 'react'

const Sidebar = () => {
  return (
    <div className='h-screen fixed left-0 top-0 px-6 py-4 bg-dark1 flex flex-col items-center'>
        <a href='/home' className='logo-container mb-16'>
            <img src='/img/LinkUp-logo.svg' alt='LinkUp' className='w-[70px]' />
        </a>
        <div className='flex flex-col gap-8 items-center justify-center'>
            <a href='/home' className='w-[55px] aspect-square rounded-lg bg-black hover:bg-black/70 transition flex items-center justify-center'>
                <i className="bi bi-house text-[35px] text-primary"></i>
            </a>
            <a href='/games' className='w-[55px] aspect-square rounded-lg bg-black hover:bg-black/70 transition flex items-center justify-center'>
                <i className="bi bi-controller text-[35px] text-primary"></i>
            </a>
            <a href='/profile' className='w-[55px] aspect-square rounded-lg bg-black hover:bg-black/70 transition flex items-center justify-center'>
                <i className="bi bi-person text-[35px] text-primary"></i>
            </a>
        </div>
    </div>
  )
}

export default Sidebar
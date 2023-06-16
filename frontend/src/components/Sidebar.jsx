import React from 'react'

const Sidebar = () => {
  return (
    <div className='fixed bottom-0 left-0 top-auto z-10 flex items-center justify-center w-screen h-auto px-6 py-4 border-t-2 border-primary sm:border-t-0 sm:top-0 sm:bottom-auto sm:flex-col sm:justify-normal sm:w-auto sm:h-screen bg-dark1'>
        <a href='/' className='hidden mb-16 logo-container sm:block'>
            <img src='/img/LinkUp-logo.svg' alt='LinkUp' className='w-[70px]' />
        </a>
        <div className='flex items-center justify-center gap-20 sm:flex-col sm:gap-8'>
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
import ThoughtsContainer from 'components/ThoughtsContainer';
import React, { useEffect } from 'react';
import HomeCarousel from 'components/Carousels/HomeCarousel';

const Home = () => {
  return (
    <>
    {/* <Header /> */}
    <div className='flex items-center justify-between mb-8'>
      <div>
        <h1 className='text-[36px] font-bold'>Dashboard</h1>
        <p className='text-[18px]'>Lorem ipsum dolor sit amet consectetur. Tempor.</p>
      </div>
      <div>
        <a href='/profile' className='rounded-full w-[50px] flex center aspect-square bg-primary transition hover:-translate-y-1'>
          <i className="text-xl text-black bi bi-trophy"></i>
        </a>
      </div>
    </div>

    <div className='w-full mb-8'>
      <a href='/games' className='flex items-center gap-1 mb-4 transition hover:translate-x-1'>
        <h3 className='text-[24px] text-primary font-bold'>Games of the week</h3>
        <i className="text-3xl text-primary bi bi-arrow-right-short"></i>
      </a>
      <div>
        <HomeCarousel />
      </div>
    </div>

    <div className='w-full'>
      <ThoughtsContainer />
    </div>
    </>
  )
}

export default Home
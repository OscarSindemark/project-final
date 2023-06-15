import React from 'react'

const HomeCarouselCard = (props) => {
  return (
    <div className={`${props.class} relative px-6 py-3 mr-2 bg-no-repeat bg-cover rounded-lg  aspect-video`} style={{ backgroundImage: `url(${props.img})` }}>
        <div className='absolute bottom-0 left-0 bg-gradient-to-t from-[#000]/80 to-[#000]/0 w-full h-2/3' />
        <div className='absolute bottom-2 left-4'>
            <h3 className='font-bold text-[18px]'>{props.name}</h3>
            <div className='flex items-center gap-2'>
                <div className='text-primary rounded-full px-[15px] text-[14px] bg-dark1'>
                    {props.genre}
                </div>
                <div className='text-primary rounded-full px-[15px] text-[14px] bg-dark1'>
                    {props.free ? (
                        <i className="bi bi-currency-dollar"></i>
                    ) : (
                        <i className="bi bi-piggy-bank"></i>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeCarouselCard
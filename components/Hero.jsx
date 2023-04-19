import React from 'react'

const Hero = () => {
  return (
    <div className=' max-w-[1000px] mx-auto p-4' >
        <div className=' max-h-[500px] relative'>
            {/*Overlay*/}
            <div className=' absolute w-full h-full text-white max-h-[500px2] bg-black/40 flex flex-col justify-center rounded-lg shadow-lg'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className=' text-orange-600'>Monkey</span></h1>
            </div>
            <img className=' rounded-lg w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/13572549/pexels-photo-13572549.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="/" />
        </div>
    </div>
  )
}

export default Hero
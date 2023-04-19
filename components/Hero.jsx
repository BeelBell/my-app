import React from 'react'
import Logo from '../public/Logo.svg'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className=' max-w-[1250px] mx-auto p-4' >
            <div className='  flex justify-between items-center '>
                <div >
                    <h1 className=' font-Prompt font-bold text-7xl'>
                        YaJok Group
                    </h1>
                    <span className=' py-8 font-Prompt font-bold text-2xl'>
                        Rpg Fantasy Open World Game Development Team
                    </span>
                </div>
                <Image className=' dark:bg-white ' src={Logo} alt="Logo" width={400} height={400} />
            </div>
        </div>
    )
}

export default Hero

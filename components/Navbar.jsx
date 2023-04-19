import React, { Component , useState } from 'react';
import Link from 'next/link';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { ArrowForwardIcon, HamburgerIcon } from '@chakra-ui/icons'



const Navbar = () => {
    const [nav, setNav] = useState(false)
    return (
        <div className='dark:bg-slate-800 dark:text-white border-b-4 relative border-stone-200'>
            <div className=' max-w-[1000px] mx-auto flex justify-between items-center p-4 '>
                <div >
                    <div onClick={() => setNav(!nav)} className=' text-white cursor-pointer'>
                        <i class="fa-regular fa-bars"></i>
                    </div>

                </div>
                <h1 className='font-Prompt font-medium  text-2xl'>
                    YaJok Group
                </h1>
                <ul className=' font-Prompt font-bold flex '>
                    <li className='px-5'>
                        <Link href="/" >
                            <li>Home</li>
                        </Link>
                    </li>
                    <li className='px-5'>
                        <Link href="/" >
                            <li>Our Team</li>
                        </Link>
                    </li>
                    <li className='px-5'>
                        <Link href="/" >
                            <li>Our Games</li>
                        </Link>
                    </li>
                </ul>
                <div>
                    <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
                            Contact Now
                        </Button>
                    </Link>

                </div>
            </div>
        </div>

    )
}

export default Navbar;
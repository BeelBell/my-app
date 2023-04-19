import React, { Component } from 'react';
import Link from 'next/link';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'


const Navbar = () => {
    return (
        <div className='dark:bg-slate-800 dark:text-white border-b-4 border-stone-200'>
            <div className=' max-w-[1000px] mx-auto flex justify-between items-center p-4 '>
                <h1 className='font-Prompt font-medium  text-2xl'>
                    YaJok Group
                </h1>
                <ul className=' font-Prompt font-medium flex '>
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
                    <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
                        <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            Contact Now
                        </Link>
                    </Button>
                </div>
            </div>
        </div>

    )
}

export default Navbar;
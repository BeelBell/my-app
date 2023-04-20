import React, { Component, useState } from 'react';
import Link from 'next/link';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { ArrowForwardIcon, HamburgerIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/button'
import { Switch } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/layout'
import {
    MoonIcon,
    SunIcon
} from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/color-mode'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    // hook which help us to toggle the color modes
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <div className='dark:bg-slate-800 bg-white dark:text-white border-b-4  relative border-stone-200'>
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
                        <Link href="/Ourteam" > 
                            <li>Our Team</li>
                        </Link>
                    </li>
                    <li className='px-5'>
                        <Link href="/Ourgames" >
                            <li>Our Games</li>
                        </Link>
                    </li>
                </ul>
                <div>
                    <Link href="https://discord.gg/D3g9H3c3j6">
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
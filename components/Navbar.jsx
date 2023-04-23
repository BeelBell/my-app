import React, { Component, useState } from 'react';
import Link from 'next/link';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { ArrowForwardIcon, HamburgerIcon } from '@chakra-ui/icons'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiOutlineHome } from "react-icons/ai";
import { BiCart, BiCategoryAlt } from "react-icons/bi";
import { BsWallet2, BsCurrencyDollar } from "react-icons/bs"
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
        <div className=' bg-white relative border-stone-200 font-Prompt'>
            <div className=' max-w-[1600px] mx-auto flex justify-between items-center p-4 xl:max-w-7xl  '>



                {/* Pc Menu */}
                <AiOutlineMenu className=' lg:hidden h-6 w-6 cursor-pointer' onClick={() => setNav(!nav)} />
                <h1 className='font-Prompt font-medium  text-2xl'>
                    YaJok Group
                </h1>

                <nav className='lg:block hidden  items-center'>
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
                            <Link href="/OurProject" >
                                <li>Our Project</li>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <Link href="https://discord.gg/D3g9H3c3j6">
                        <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
                            Contact Now
                        </Button>
                    </Link>
                </div>




                {/* Mobie Menu */}
                {nav ? <div className='bg-black/50 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}


                {/*Side Menu */}
                <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-slate-900 z-10 duration-300'}>

                    <AiOutlineClose
                        onClick={() => setNav(!nav)}
                        size={30}
                        className=' text-slate-700 absolute right-4 top-4 cursor-pointer'
                    />

                    <nav>
                        <ul className=' flex flex-col p-4 text-slate-700  '>
                            <Link href="/" >
                                <li className=' text-xl py-4 flex hover:text-white'>Home</li>
                            </Link>
                            <Link href="/Ourteam" >
                                 <li className=' text-xl py-4 flex hover:text-white'>Our Team</li>
                            </Link>
                            
                            <div className='flex items-center justify-center'></div>
                        </ul>
                    </nav>

                </div>
                {/* Overlay */}

            </div>
        </div>
    )
}

export default Navbar;
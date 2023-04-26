import React, { Component, useState } from 'react';
import Link from 'next/link';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useTheme } from 'next-themes';
import { ArrowForwardIcon, HamburgerIcon } from '@chakra-ui/icons'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiOutlineHome } from "react-icons/ai";
import { BiCart, BiMenuAltLeft } from "react-icons/bi";
import { BsWallet2, BsCurrencyDollar, BsSunFill } from "react-icons/bs"
import { IconButton } from '@chakra-ui/button'
import { Switch } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/layout'
import UseColorMode from './UseColorMode'
import {
    MoonIcon,
    SunIcon
} from '@chakra-ui/icons';


const Navbar = () => {
    const [nav, setNav] = useState(false)
    // hook which help us to toggle the color modes

    return (
        <div className=' bg-white dark:bg-gray-800 relative border-stone-200 font-Prompt'>
            <div className=' max-w-[1600px] mx-auto flex justify-between items-center p-4 xl:max-w-7xl  '>



                {/* Pc Menu */}
                {/* The button to open modal */}
                <label htmlFor="my-modal-4" > <BiMenuAltLeft className=' dark:text-white lg:hidden h-6 w-6 cursor-pointer' onClick={() => setNav(!nav)} /></label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                <label htmlFor="my-modal-4" className="modal cursor-pointer">
                    <label className="dark:bg-slate-800  dark:text-gray-200 modal-box relative" htmlFor="">
                    <ul className=' font-Prompt text-xs dark:text-gray-200 font-bold justify-center flex items-center text-justify'>
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
                        <li className='px-5'>
                            <UseColorMode />
                        </li>
                    </ul>
                    </label>
                </label>
                <h1 className='font-Prompt font-medium  dark:text-white text-slate-900 text-2xl'>
                    YaJok Group
                </h1>


                <nav className='lg:block hidden items-center'>
                    <ul className=' font-Prompt dark:text-gray-200 font-bold flex '>
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
                        <li className='px-5'>
                            <UseColorMode />
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




                

            </div>
        </div>
    )
}

export default Navbar;
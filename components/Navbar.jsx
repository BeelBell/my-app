import React, { Component, useState } from 'react';
import Link from 'next/link';
import NobleFable from '../public/NOBLEFABLEGAMES.svg'
import Logo from '../public/Logo.svg'
import DrawerComponent from "../components/Drawer";
import Image from 'next/image';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    // hook which help us to toggle the color modes

    return (
        <>
            <header className=' sticky top-0 z-30 w-full'>
                <nav className=" bg-white border-gray-200">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="/" className="flex items-center">

                            <Image src={Logo} alt='NobleFable' height={64} width={64} />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap">Noble Fable</span>
                        </a>
                        {/* Pc Menu */}
                        {/* The button to open modal */}

                        <DrawerComponent />

                        <div className="hidden w-full lg:block  md:w-auto" id="navbar-default">
                            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <Link href="/">
                                <li>
                                    <a className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Home</a>
                                </li>
                                </Link>
                                <Link href="/About">
                                <li>
                                    <a href="/About" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                                </li>
                                </Link>
                                <li>
                                    <a href="https://discord.gg/D3g9H3c3j6" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>


    )
}

export default Navbar;
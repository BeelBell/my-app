import React from 'react'
import Hutao from '../public/Hutao.png'
import Image from 'next/image'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import Link from 'next/link'

const Footer = () => {
    return (


        <footer className=" w-full h-auto bg-white border-stone-200 fixed left-0 bottom-0 flex justify-center items-center text-white text-2xl ">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="hover:underline">YaJok Group</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link className='mr-4 hover:underline md:mr-6' href="/">Home</Link>
                    </li>
                    <li>
                        <Link className='mr-4 hover:underline md:mr-6' href="/Ourteam">Our Team</Link>
                    </li>
                    <li>
                        <Link className='mr-4 hover:underline md:mr-6' href="https://discord.gg/D3g9H3c3j6">Contact</Link>
                    </li>
                </ul>
            </div>
        </footer >


    )
}

export default Footer


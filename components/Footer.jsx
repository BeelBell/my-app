import React from 'react'
import Hutao from '../public/Hutao.png'
import Image from 'next/image'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

const Footer = () => {
    return (


        <footer class=" w-full h-16 bg-white border-t-4 border-stone-200 fixed left-0 bottom-0 flex justify-center items-center text-white text-2xl ">
            <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://yajokgroup.netlify.app/" class="hover:underline">YaJok Group</a>. All Rights Reserved.
                </span>
                <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
        </footer >


    )
}

export default Footer


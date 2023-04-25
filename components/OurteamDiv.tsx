import React, { Component, useState } from 'react';
import Link from 'next/link';
import Hutao from '../public/Hutao.png'
import Lumine from '../public/Lumine.jpg'
import KafūChino from '../public/KafūChino.jpg'
import { Tooltip } from '@chakra-ui/react'
import facebook from '../public/facebook.svg'
import Image from 'next/image';
import { BsFacebook, BsTwitter } from 'react-icons/bs'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { ArrowForwardIcon, HamburgerIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/button'
import { Switch } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/layout'
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Text, Stack, Divider, Breadcrumb, BreadcrumbLink, BreadcrumbItem } from '@chakra-ui/react'
import {
    MoonIcon,
    SunIcon
} from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/color-mode'

const OurteamDiv = () => {


    return (
        <div className='max-w-[1250px] mx-auto p-4 py-12 items-center justify-center font-medium font-Prompt '>

            <Breadcrumb className='  dark:text-gray-200'>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='/Ourteam'>Our Team</BreadcrumbLink>
                </BreadcrumbItem>

            </Breadcrumb>
            <div className='items-center justify-center text-left flex  mx-auto p-4 py-12 '>
                <div className="w-full max-w-md p-4 bg-white border items-center border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                        <h5 className="text-xl font-bold leading-none text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 dark:text-white">YaJok Group Team</h5>
                    </div>
                    <div className="flow-root">

                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">

                            {/*Crads 1*/}

                            <li className="py-3 sm:py-4">
                                <div className=" flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <Image className=' rounded-full' src={Hutao} alt="Hutao" width={64} height={64} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            BeelBellX
                                        </p>
                                        <Tooltip label="Game Designer , Web Developer , Frontend Developer" aria-label='A tooltip'>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                Game Designer , Web Developer , Frontend Developer
                                            </p>
                                        </Tooltip>

                                    </div>
                                    <div className="px-1 inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        <Link className='' href="https://www.facebook.com/XverNightAkaBeelBellX/">
                                            <Button className=' dark:bg-slate-800'>
                                                <BsFacebook size={20} className=' dark:text-white' />
                                            </Button>
                                        </Link>
                                        <Link href="https://twitter.com/BeelBellX">
                                            <Button className=' dark:bg-slate-800'>
                                                <BsTwitter size={20} className=' dark:text-white' />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </li>

                            {/*Crads 2*/}

                            <li className="py-3 sm:py-4">
                                <div className="  flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <Image className=' rounded-full ' src={Lumine} alt="Lumine" width={64} height={64} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            Miu
                                        </p>
                                        <Tooltip label="Scripter , Animator , VFX / GFX , Gui , Modeler" aria-label='A tooltip'>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                Scripter , Animator , VFX / GFX , Gui , Modeler ,
                                            </p>
                                        </Tooltip>

                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        <Link className='' href="https://www.facebook.com/profile.php?id=100071235520280">
                                            <Button className=' dark:bg-slate-800'>
                                                <BsFacebook size={20} className=' dark:text-white' />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </li>

                            {/*Crads 3*/}

                            <li className="py-3 sm:py-4">
                                <div className="  flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <Image className=' rounded-full ' src={KafūChino} alt="KafūChino" width={64} height={64} />
                                    </div>
                                    <div className="flsex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            Peak
                                        </p>
                                        <Tooltip label="Modeler" aria-label='A tooltip'>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                Modeler
                                            </p>
                                        </Tooltip>

                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default OurteamDiv;


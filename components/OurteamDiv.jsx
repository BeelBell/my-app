import React, { Component, useState } from 'react';
import Link from 'next/link';
import Hutao from '../public/Hutao.png'
import Lumine from '../public/Lumine.jpg'
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
            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='/Ourteam'>Our Team</BreadcrumbLink>
                </BreadcrumbItem>

            </Breadcrumb>
            <div className='items-center justify-center text-left flex max-w-[1640px] mx-auto p-4 py-12 '>
                <div class="w-full max-w-md p-4 bg-white border items-center border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex items-center justify-between mb-4">
                        <h5 class="text-xl font-bold leading-none text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 dark:text-white">YaJok Group Team</h5>
                    </div>
                    <div class="flow-root">
                        
                        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">

                            {/*Crads 1*/}

                            <li class="py-3 sm:py-4">
                                <div class=" flex items-center space-x-4">
                                    <div class="flex-shrink-0">
                                        <Image className=' rounded-full' src={Hutao} alt="Hutao" width={64} height={64} />
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            BeelBellX
                                        </p>
                                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                            Game Designer
                                        </p>
                                    </div>
                                    <div class="px-1 inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        <Link className='' href="https://www.facebook.com/XverNightAkaBeelBellX/">
                                            <Button >
                                                <BsFacebook size={20} />
                                            </Button>
                                        </Link>
                                        <Link href="https://twitter.com/BeelBellX">
                                            <Button>
                                                <BsTwitter size={20} />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </li>

                            {/*Crads 2*/}

                            <li class="py-3 sm:py-4">
                                <div class="  flex items-center space-x-4">
                                    <div class="flex-shrink-0">
                                        <Image className=' rounded-full ' src={Lumine} alt="Lumine" width={64} height={64} />
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            Miu
                                        </p>
                                        <Tooltip label="Scripter , Animator , VFX / GFX , Gui , Modeler" aria-label='A tooltip'>
                                            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                                Scripter , Animator , VFX / GFX , Gui , Modeler
                                            </p>
                                        </Tooltip>

                                    </div>
                                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        <Link className='' href="https://www.facebook.com/profile.php?id=100071235520280">
                                            <Button >
                                                <BsFacebook size={20} />
                                            </Button>
                                        </Link>
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


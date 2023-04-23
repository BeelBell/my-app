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
        <>
            <div className=' relative max-w-full mx-auto p-4 py-12 items-center justify-center font-medium font-Prompt '>

                <div className='items-center justify-center text-left flex max-w-[1640px] mx-auto p-4 py-12 '>
                    <div class="w-full p-4 bg-white items-center sm:p-8">
                        <div class="flex items-center justify-center mb-4">
                            <h1 className='text-4xl font-medium text-transparent md:text-8xl bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500'>
                                YaJok Group
                            </h1>

                        </div>
                        <div className='text-sm md:text-xl  flex items-center justify-center mb-4'>
                            <span>
                                Rpg Fantasy Open World Game Development Team
                            </span>
                        </div>
                        <div className='flex items-center justify-center mb-4'>
                            <Link href="https://discord.gg/D3g9H3c3j6">
                                <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
                                    Contact Now
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Divider />
        </>
    )
}

export default OurteamDiv;


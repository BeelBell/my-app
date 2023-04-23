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
import { Card, CardHeader, Spinner, CardFooter, SimpleGrid, Text, Stack, Divider, Breadcrumb, BreadcrumbLink, BreadcrumbItem } from '@chakra-ui/react'
import {
    MoonIcon,
    SunIcon
} from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/color-mode'

const OurteamDiv = () => {


    return (
        <div className=' relative max-w-full mx-auto p-4 py-12 items-center justify-center font-medium font-Prompt '>

            <div className='items-center justify-center text-left flex max-w-[1640px] mx-auto p-4 py-12 '>
                <div class="w-full p-4 bg-white items-center sm:p-8">
                    <div class="flex items-center justify-center mb-4">
                        <Spinner
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='blue.500'
                            size='lg'
                        />
                        <span className='px-4'>Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurteamDiv;


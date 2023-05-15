import React, { Component, useState } from 'react';
import Link from 'next/link';
import Hutao from '../public/Hutao.png'
import Lumine from '../public/Lumine.jpg'
import NobleFable from '../public/NOBLEFABLEGAMES.svg'
import { Tooltip } from '@chakra-ui/react'
import facebook from '../public/facebook.svg'
import Logo from '../public/Logo.svg'
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
            <section>
                <div className="py-8 px-4 min-h-screen mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
                    <div className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-smrounded-full">
                        <Image src={Logo} alt='Logo' height={300} width={300} />
                    </div>
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                        Noble Fable
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
                        We are Rpg Fantasy Open World development team and in the future we will make Pixel Rpg Fantasy game as well.
                    </p>
                </div>
            </section>

        </>
    )
}

export default OurteamDiv;




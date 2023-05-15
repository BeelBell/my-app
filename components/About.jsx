import React, { useEffect, useState } from 'react'
import Website1 from '../public/Website1.png'
import Image from 'next/image'
import axios from 'axios'
import useSWR from 'swr'
import { Badge, background } from '@chakra-ui/react'
import Loading from './Loading'
import { Card, CardHeader, CardBody, CardFooter, ButtonGroup, Text, Divider, Button, Stack, Heading } from '@chakra-ui/react'
import { root } from 'postcss'

import Popover from './PopoverComponent'
import Link from 'next/link'

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function About() {

    const URL = 'https://beelbell.github.io/bellbell.github.io/example.json'
    const { data, error } = useSWR(URL, fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div><Loading /></div>

    const LoadPJ = []
    for (const key in data) {
        LoadPJ.push(data[key])
    }


    return (
        <div className=' max-w-7xl mx-auto p-4 py-12 items-center justify-center font-medium font-Prompt'>

            <div className="mx-auto lg:mx-0 ">
                <div className='pb-10 pt-10'>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">About Us</h2>
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Noble Fable</h2>
                <p className="mt-2 text-lg leading-8 text-gray-700">
                    We are a small group with a goal of making great games. We started from making games in Roblox platform. We make games in different genres like horror games, adventure games and now we are making a game called Zephyra in Roblox platform. It is RPG Fantasy Open World Adventure Story Multiplayer. And in the future we will make Pixel games.
                </p>
            </div>
        </div>
    )
}



export default About;
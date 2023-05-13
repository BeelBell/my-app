import React, { useEffect, useState } from 'react'
import Website1 from '../public/Website1.png'
import Image from 'next/image'
import axios from 'axios'
import { Badge, background } from '@chakra-ui/react'
import Loading from './Loading'
import { Card, CardHeader, CardBody, CardFooter, ButtonGroup, Text, Divider, Button, Stack, Heading } from '@chakra-ui/react'
import { root } from 'postcss'

import Popover from '../components/PopoverComponent'
import Link from 'next/link'

interface Proj {
    id: number;
    name: string;
    category: string;
    madeby: string;
    image: string;
    description: string;
}

function CardProject() {
    const [data, setData] = useState<Proj[]>([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        fetch('https://beelbell.github.io/bellbell.github.io/example.json')
            .then(response => response.json())
            .then(data => {
                data.sort((a: Proj, b: Proj) => b.id - a.id);
                setData(data);
                setLoading(false);
            })
            .catch(error => console.error(error));
    }, [])

    if (isLoading) return <Loading />
    if (!data) return <p>No profile data</p>


    return (
        <section id="projects">
            <div className=' max-w-7xl mx-auto p-4 py-12 items-center justify-center font-medium font-Prompt'>

                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Projects</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Select one of our projects to see more.
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3'>

                    {data.map(proj => (

                        <div key={proj.id} className="w-full max-w-sm bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700">

                            <a>
                                <img
                                    className="p-8 rounded-t-lg"
                                    src={proj.image}
                                    alt={proj.image}
                                />
                            </a>
                            <div className="px-5 pb-5">
                                <a>
                                    <h5 className="text-left text-xl font-semibold  text-gray-900 dark:text-white">
                                        {proj.name}
                                    </h5>
                                    <span className="text-center font-semibold  text-gray-900 dark:text-white">
                                        {proj.description}
                                    </span>
                                </a>
                                <div className="flex items-center justify-center pt-4 col-span-2">
                                    <Link href="#">
                                        <Button className=' w-80  text-blue-500 border hover:border-blue-500 border-gray-200'>More</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}



export default CardProject;
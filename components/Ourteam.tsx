import React, { useEffect, useState } from 'react'
import Website1 from '../public/Website1.png'
import Image from 'next/image'
import axios from 'axios'
import { Badge, background } from '@chakra-ui/react'
import Loading from './Loading'
import { Card, CardHeader, CardBody, CardFooter, ButtonGroup, Text, Divider, Button, Stack, Heading } from '@chakra-ui/react'
import { root } from 'postcss'

import Popover from './PopoverComponent'
import Link from 'next/link'

interface person {
    id: number;
    name: string;
    imageUrl: string;
    role: string;

}

function Ourteam() {
    const [data, setData] = useState<person[]>([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        fetch('https://beelbell.github.io/noblefable.github.io/example.json')
            .then(response => response.json())
            .then(data => {
                data.sort((a: person, b: person) => b.id - a.id);
                setData(data);
                setLoading(false);
            })
            .catch(error => console.error(error));
    }, [])

    if (isLoading) return <Loading />
    if (!data) return <p>No profile data</p>


    return (
        <section id="team">
            <div className=' max-w-7xl mx-auto p-4 py-12 items-center justify-center font-medium font-Prompt'>

                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Team</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Meet our team
                    </p>
                </div>
                <ul role="list" className="pt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {data.map(person => (
                        <li key={person.name}>
                            <div className="flex items-center gap-x-6">
                                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>

    )
}



export default Ourteam;
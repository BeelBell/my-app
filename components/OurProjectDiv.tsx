import React, { useEffect, useState } from 'react'
import Website1 from '../public/Website1.png'
import Image from 'next/image'
import axios from 'axios'
import Loading from './Loading'
import { Badge, background } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Text, Stack, Divider, Breadcrumb, BreadcrumbLink, BreadcrumbItem } from '@chakra-ui/react'
import Link from 'next/link'


interface Proj {
    id: number;
    name: string;
    category: string;
    madeby: string;
    image: string;
    date: string;
}

function OurProjectDiv() {
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
        <div className='max-w-[1250px] mx-auto p-4 py-12 items-center justify-center font-medium font-Prompt '>

            <Breadcrumb>
                <BreadcrumbItem>
                    <Link href='/' >
                        <BreadcrumbLink>Home</BreadcrumbLink>
                    </Link>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <Link href='/OurProject' >
                        <BreadcrumbLink >Our Project</BreadcrumbLink>
                    </Link>
                </BreadcrumbItem>

            </Breadcrumb>
            <div className='max-w-[1250px] mx-auto p-4 py-12 items-center justify-center font-medium font-Prompt '>

                <div className='items-center justify-center text-left flex max-w-[1640px] mx-auto p-4 '>
                    <div className="w-full  p-4 bg-white  items-center sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <div className="HeadlineCards ">

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">


                                {data.map(proj => (

                                    <a key={proj.id}
                                        className="relative justify-center flex items-center w-full md:w-auto pb-[56.25%] bg-cover bg-center text-white rounded-lg border-solid border-2 border-gray-200 transition hover:scale-[102%]"
                                        style={{
                                            backgroundImage:`linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url("${proj.image}")`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}
                                    >
                                        <div className="HeadlineCards absolute left-4 top-6 flex-inline">
                                            <Badge variant='solid' colorScheme='green'>
                                                {proj.category}
                                            </Badge>

                                        </div>
                                        <div className=" text-white HeadlineCards absolute left-4 bottom-6 flex-inline">

                                            <p className="text-sm">Name: {proj.name}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>

    )
}

export default OurProjectDiv;


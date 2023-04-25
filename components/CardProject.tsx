import React, { useEffect, useState } from 'react'
import Website1 from '../public/Website1.png'
import Image from 'next/image'
import axios from 'axios'
import { Badge, background } from '@chakra-ui/react'
import Loading from './Loading'
import { Card, CardHeader, CardBody, CardFooter, ButtonGroup, Text, Divider, Button, Stack, Heading } from '@chakra-ui/react'
import { root } from 'postcss'

interface Proj {
    id: number;
    name: string;
    category: string;
    madeby: string;
    image: string;
    date: string;
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


        <div className='max-w-[1250px] mx-auto p-4 py-12 items-center justify-center font-medium font-Prompt '>

            <div className='items-center justify-center text-left flex max-w-[1640px] mx-auto p-4 py-12 '>
                <div className="w-full  p-4 bg-white  items-center sm:p-8  dark:bg-gray-900 dark:border-gray-700">
                    <div className="flex items-center mb-4">
                        <h1 className='text-xl dark:text-white font-medium text-left md:text-3xl'>
                            ProJect
                        </h1>
                    </div>



                    <div className="HeadlineCards ">

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">

                            {data.map(proj => (
                                <div key={proj.id} className="max-w-sm bg-white border border-gray-200  rounded-lg  shadow dark:bg-gray-800 dark:border-gray-700">
                                    <a key={proj.id}
                                        className="relative justify-center flex items-center w-full md:w-auto bg-cover bg-center text-white rounded-lg border-solid border-2 border-gray-200 transition">
                                            <img className='rounded-md	' src={proj.image} alt={proj.image} />
                                        
                                        <div className="HeadlineCards absolute left-4 top-2 flex-inline">
                                            <Badge variant='solid' colorScheme='green'>
                                                {proj.category}
                                            </Badge>

                                        </div>
                                    </a>
                                    <div className="p-5">
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{proj.name}</h5>
                                        </a>
                                        <p className="mb-3 font-normal text-gray-800 dark:text-gray-400">Made By : {proj.madeby} <br/> Date : {proj.date} </p>
                                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Read more
                                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}



export default CardProject;
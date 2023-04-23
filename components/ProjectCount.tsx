import React, { useEffect, useState } from 'react'
import Website1 from '../public/Website1.png'
import { MdWebAsset } from "react-icons/md";
import Image from 'next/image'
import axios from 'axios'
import { Badge, background } from '@chakra-ui/react'
import Loading from './Loading'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { ArrowForwardIcon, HamburgerIcon } from '@chakra-ui/icons'
import Link from 'next/link'

interface Proj {
    id: number;
    name: string;
    category: string;
    madeby: string;
    image: string;
    date: string;
}

function ProjectCount() {
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

        <div className="hero mx-auto p-4 py-12 f font-Prompt ">
            <div className="hero-content text-center text-neutral-content">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
                    {/*Crads 1*/}
                    <div className='px-6'>
                        <a className="block max-w-sm p-6 rounded-lg ">
                            <h5 className="text-gray-700  mb-2 text-2xl font-bold tracking-tight">Project Websites </h5>
                            <p className="text-gray-900 font-bold text-7xl"> 1 </p>
                            <p className="text-gray-500 font-medium"> Websites </p>
                        </a>
                    </div>

                    {/*Crads 2*/}
                    <div>
                        <a className="block max-w-sm p-6 rounded-lg ">
                            <h5 className="text-gray-700  mb-2 text-2xl font-bold tracking-tight">Project Games </h5>
                            <p className="text-gray-900 font-bold text-7xl"> 1 </p>
                            <p className="text-gray-500 font-medium"> Games </p>
                        </a>
                    </div>

                    {/*Crads 3*/}
                    <div>
                        <a className="block max-w-sm p-6 rounded-lg ">
                            <h5 className="text-gray-700  mb-2 text-2xl font-bold tracking-tight">Project Logos </h5>
                            <p className="text-gray-900 font-bold text-7xl"> 1 </p>
                            <p className="text-gray-500 font-medium"> Logos </p>
                        </a>
                    </div>

                    {/*Crads 4*/}
                    <div>
                        <a className="block max-w-sm p-6 rounded-lg ">
                            <h5 className="text-gray-700  mb-2 text-2xl font-bold tracking-tight">Project Icons </h5>
                            <p className="text-gray-900 font-bold text-7xl"> 0 </p>
                            <p className="text-gray-500 font-medium"> Icons </p>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}



export default ProjectCount;
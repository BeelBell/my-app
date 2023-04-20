import React from 'react'
import Website1 from '../public/Website1.png'
import Image from 'next/image'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

const HeadlineCards = () => {
    return (

        <div className='max-w-[1250px] mx-auto p-4 py-12 items-center justify-center font-medium font-Prompt '>

            <div className='items-center justify-center text-left flex max-w-[1640px] mx-auto p-4 py-12 '>
                <div class="w-full  p-4 bg-white  items-center sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex items-center text-center justify-between mb-4">
                        <h5 class="text-xl font-bold  leading-none text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 dark:text-white">ProJect</h5>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                        {/*Crads 1*/}
                        <div class="relative justify-center flex items-center border rounded-lg border-sky-200 hover:bg-black/50 hover:ring-1 delay-100 duration-300  w-full md:w-auto ">
                           
                            <div class="absolute left-4 bottom-2 flex-inline">
                                <p class="text-lg">Website</p>
                            </div>
                            <Image className=' rounded-lg max-h-[350px] md:max-h-[150px w-full object-cover ]' src={Website1} alt="Website1" width={350} height={150} />
                            
                        </div>

                        {/*Crads 1*/}
                        <div class="relative justify-center flex items-center border rounded-lg border-sky-200 hover:bg-black/50 hover:ring-1 delay-100 duration-300  w-full md:w-auto ">
                           
                            <div class="absolute left-4 bottom-2 flex-inline">
                                <p class="text-lg">Website</p>
                            </div>
                            <Image className=' rounded-lg max-h-[350px] md:max-h-[150px w-full object-cover ]' src={Website1} alt="Website1" width={350} height={150} />
                            
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}

export default HeadlineCards


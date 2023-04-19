import React, { Component, useState } from 'react';
import Link from 'next/link';
import Hutao from '../public/Hutao.png'
import facebook from '../public/facebook.svg'
import Image from 'next/image';
import { BsFacebook, BsTwitter } from 'react-icons/bs'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { ArrowForwardIcon, HamburgerIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/button'
import { Switch } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/layout'
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Text, Stack, Divider , Breadcrumb , BreadcrumbLink , BreadcrumbItem } from '@chakra-ui/react'
import {
    MoonIcon,
    SunIcon
} from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/color-mode'

const OurteamDiv = () => {


    return (
        <div className='max-w-[1640px] mx-auto p-4 py-12 font-medium font-Prompt '>
            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='/Ourteam'>Our Team</BreadcrumbLink>
                </BreadcrumbItem>

            </Breadcrumb>
            <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-2 gap-6'>

                {/*Crads 1*/}
                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                >
                    <Image src={Hutao} alt="Hutao" width={400} height={400} />

                    <Stack>
                        <CardBody>
                            <Heading size='md'>???</Heading>

                            <Text py='2'>
                                ??????
                            </Text>
                        </CardBody>

                        <CardFooter>
                            <Button>
                                ?
                            </Button>
                        </CardFooter>
                    </Stack>
                </Card>
                {/*Crads 2*/}
                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                >
                    <Image src={Hutao} alt="Hutao" width={400} height={400} />

                    <Stack>
                        <CardBody>
                            <Heading size='md'>???</Heading>

                            <Text py='2'>
                                ??????
                            </Text>
                        </CardBody>

                        <CardFooter>
                            <Button>
                                ?
                            </Button>
                        </CardFooter>
                    </Stack>
                </Card>
                {/*Crads 3*/}
                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                >
                    <Image src={Hutao} alt="Hutao" width={400} height={400} />

                    <Stack>
                        <CardBody>
                            <Heading size='md'>BeelBellX</Heading>

                            <Text py='2'>
                                Game Designer
                            </Text>
                        </CardBody>

                        <CardFooter>
                            <Link className='px-2' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                <Button >
                                    <BsFacebook size={30} />
                                </Button>
                            </Link>
                            <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                <Button>
                                    <BsTwitter size={30} />
                                </Button>
                            </Link>
                        </CardFooter>
                    </Stack>
                </Card>

            </div>
        </div>
    )
}

export default OurteamDiv;
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import Loading from './Loading'


const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Ourteam() {
    const URL = 'https://beelbell.github.io/noblefable.github.io/example.json'
    const { data, error } = useSWR(URL, fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div><Loading /></div>

    const LoadPJ = []
    for (const key in data) {
        LoadPJ.push(data[key])
    }


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
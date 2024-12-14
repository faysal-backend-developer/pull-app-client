import { Button } from '@/components/ui/button'
import React from 'react'
import Link from "next/link"

export default function NoFound() {
    return (
        <div className=" font-serif text-center flex justify-center items-center h-screen">
            <div className='-mt-12'>
                <h1 className="text-9xl font-medium mb-4 ">Opps!!!</h1>
                <h2 className='text-4xl mb-4'>Content Not Founded Here</h2>
                <Link href="/"><Button>Home</Button></Link>
            </div>
        </div>
    )
}

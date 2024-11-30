
"use client"
import { Calendar } from '@/components/ui/calendar'
import { Separator } from '@/components/ui/separator'
import {useState} from 'react'
import CategoryFilter from '../CategoryFilter/CategoryFilter'

export default function Filter() {

    const [date, setDate] = useState<Date | undefined>(new Date())

    console.log(date)
    return (
        <div className='h-screen flex justify-between'>
            <div>
                {/* Left Side Content Here.... */}
                <div className='mt-4'>
                    <h1 className='text-xl font-serif font-semibold'>Content filtering...</h1>
                </div>
                <div>
                    
                </div>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border mt-4" />
                <CategoryFilter/>
            </div>
            <Separator orientation='vertical' />
        </div>
    )
}

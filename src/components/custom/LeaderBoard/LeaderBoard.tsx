
import Text from '@/components/Style/Text'
import { Separator } from '@/components/ui/separator'
import React from 'react'

export default function LeaderBoard() {
  return (
    <div className='lg:h-screen flex justify-start'>
      <Separator orientation='vertical' />
      <div className='w-full'>
        <div className='py-2 '>
          <Text props='Leader' text='Leader Board' />
          <h2 className='text-center font-semibold text-primary'>Top 10 Fans of Our App</h2>
        </div>
        
      </div>
    </div>
  )
}


import Text from '@/components/Style/Text'
import { Separator } from '@/components/ui/separator'
import { IUser } from '@/interfaces/user'
import React from 'react'
import LeaderCard from '../LeaderCard/LeaderCard'
import { Button } from '@/components/ui/button'

export default function LeaderBoard() {

  // Fake API 
  const users : IUser[] = [
    {
      id:"1",
      name: 'John Doe',
      coins: 100,
      image: ""
    },
    {
      id:"2",
      name: 'Jane Doe', 
      coins: 200,
      image: ""
    },
    {
      id:"3",
      name: 'John Doe',
      coins: 300,
      image: ""
    },
    {
      id:"4",
      name: 'Jane Doe',
      coins: 400,
      image: ""
    }
  ]


  return (
    <div className='lg:h-screen flex justify-start'>
      <Separator orientation='vertical' />
      <div className='w-full'>
        <div className='py-2 '>
          <Text props='Leader' text='Leader Board' tailwind='text-3xl uppercase' />
          <Text props='' text='Top 10 Fans' tailwind='text-xl' ></Text>
        </div>
        <div className='flex-row justify-center items-center'>
          {
            users.map((user: IUser) => <LeaderCard key={user.id}  user={user}></LeaderCard>)
          }
        </div>
        <div className="text-center">
          <Button>See More</Button>
        </div>
      </div>
    </div>
  )
}

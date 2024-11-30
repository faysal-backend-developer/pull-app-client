import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

import React from 'react'
import { IUser } from '../../../interfaces/user';

export default function LeaderCard({ user }: { user: IUser }) {
  return (
    <div className='border my-2 flex justify-between m-2 rounded-md hover:bg-yellow-50 hover:text-yellow-400 items-center p-2'>
      <div className="flex justify-start items-center">
        <Avatar>
          <AvatarImage src={user.image} />
          <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
        </Avatar>
        <Button variant="link" className='hover:text-yellow-400 hover:no-underline text-md'> {user.name} </Button>
      </div>
      <div>
        <Button size="sm" className='bg-yellow-300 hover:bg-yellow-400 text-black hover:text-black'> {"Conins:"} {user.coins}</Button>
      </div>
    </div>
  )
}

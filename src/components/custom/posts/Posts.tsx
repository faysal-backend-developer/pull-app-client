import React from 'react'
import Post from './Post'

export default function Posts() {
    const data = [
        {
            title: "Post Title lorem....",
            createAt: "14-12-24 | 05:09 pm",
            author: "Md Refat",
            category: "crecket",
            remember_time: "5 Hours",
            options: ["Yes", "No"],
            
        }
    ]
  return (
    <div>
        {
            data.map((post, i) => {
                return <Post key={i} post={post}></Post>
            })
        }
    </div>
  )
}

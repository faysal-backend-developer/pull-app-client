/* eslint-disable @typescript-eslint/no-explicit-any */


export default function Post({post : {title }} : {post: any}) {
    
  return (
    <div>
        {
            title
        }
    </div>
  )
}

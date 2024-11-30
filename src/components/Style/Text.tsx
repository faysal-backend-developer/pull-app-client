import React from 'react'


function Text({ props, text, tailwind }: { props: string, text: string, tailwind: string }): React.ReactNode {
    return (
        <>
            <div className="relative">
                <div className="absolute inset-0 flex justify-center items-center text-7xl  font-serif font-extrabold text-yellow-300 opacity-20">
                {props}
                </div>
                <div className={`relative mb-2 z-10 text-center font-mono font-extrabold  bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-400 to-orange-500 ${tailwind}`}>
                    {text}
                </div>
            </div>
            
        </>
    )
}


export default Text

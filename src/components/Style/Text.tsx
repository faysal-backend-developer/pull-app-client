import React from 'react'


function Text({ props, text }: { props: string, text: string }): React.ReactNode {
    return (
        <>
            <div className="relative">
                <div className="absolute inset-0 flex justify-center items-center text-7xl  font-serif font-extrabold text-yellow-300 opacity-20">
                {props}
                </div>
                <div className="relative z-10 text-center font-mono text-yellow-500 text-3xl font-extrabold">
                    {text}
                </div>
            </div>
            <div className="text-center w-full flex justify-center">
                <div className="border-t-8 rounded-lg opacity-20 border w-1/5 border-yellow-300 mt-4"></div>
            </div>
        </>
    )
}


export default Text

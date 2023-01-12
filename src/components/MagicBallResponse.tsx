import React from 'react'

const MagicBallResponse = ({response}: any) => {
    return (
        <div className='flex justify-center flex-col items-center animate-fade-in-down'>
            <div className='text-blue-900 text-[16rem] translate-y-[-2rem]'> &#9650;</div>
            <p className='font-bold text-lg text-slate-200 absolute max-w-[6ch] z-20 text-center'>{response}</p>
        </div>
    )
}

export default MagicBallResponse
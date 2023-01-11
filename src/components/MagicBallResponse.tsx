import React from 'react'

const MagicBallResponse = ({response}: any) => {
    return (
        <div className='w-[8rem] h-[8rem] rounded-full flex items-center justify-center'>
            <p className='font-bold text-6xl text-white'>{response}</p>
        </div>
    )
}

export default MagicBallResponse
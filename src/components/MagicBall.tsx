import React from 'react'
import MagicBallDefault from './MagicBallDefault'

interface MagicBallProps {
    response: string,
    questionAsked: boolean
}

const MagicBall = ({response, questionAsked}: MagicBallProps)=> {
    
    return (
        
        <div className='bg-black w-[20rem] h-[20rem] rounded-full flex items-center justify-center'>
            {!questionAsked ? (
                    <MagicBallDefault />
                ) : (
                    <div className='w-[8rem] h-[8rem] rounded-full flex items-center justify-center'>
                        <p className='font-bold text-6xl text-white'>{response}</p>
                    </div>
                )
            }
        </div>
    )
}

export default MagicBall
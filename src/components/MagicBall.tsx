import React from 'react'

interface MagicBallProps {
    response: string,
    questionAsked: boolean
}

const MagicBall = ({response, questionAsked}: MagicBallProps)=> {
    
    return (
        
        <div className='bg-black w-[20rem] h-[20rem] rounded-full flex items-center justify-center'>
            {!questionAsked ? (
                    <div className='bg-white w-[8rem] h-[8rem] rounded-full flex items-center justify-center'>
                        <p className='font-bold text-6xl'>8</p>
                    </div>
                ) : (
                    <div className='w-[8rem] h-[8rem] rounded-full flex items-center justify-center'>
                        <p>{response}</p>
                    </div>
                )
            }
        </div>
    )
}

export default MagicBall
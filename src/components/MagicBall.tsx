import React from 'react'
import MagicBallDefault from './MagicBallDefault'
import MagicBallResponse from './MagicBallResponse'

interface MagicBallProps {
    response: string,
    questionAsked: boolean
}

const MagicBall = ({response, questionAsked}: MagicBallProps)=> {
    
    return (
        
        <div className='bg-black w-[20rem] h-[20rem] rounded-full flex items-center justify-center select-none'>
            {!questionAsked ? (
                        <MagicBallDefault />
                ) : (
                    
                        <MagicBallResponse 
                            response={response}
                        />

                )
            }
        </div>
    )
}

export default MagicBall
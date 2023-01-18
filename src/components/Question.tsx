import React from 'react'

const Question = ({error, question}: any) => {
    return (
        <div>
            {error.length > 1 && question.length < 3 ? (
            <p className='text-red-600 font-semibold text-xl text-center max-w-[40rem] overflow-auto'>{error}</p>
            ) : (
            <p className='text-slate-200 font-semibold text-xl text-center max-w-[40rem] overflow-auto'>{question}</p>
            )}
        </div>
    )
}

export default Question
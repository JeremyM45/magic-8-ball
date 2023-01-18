import React from 'react'

const AskNewQuestion = ({setQuestionAsked}: any) => {
    return (
        <div>
            <button
                onClick={() => setQuestionAsked(false)}
                className='text-blue-500 rounded-full border-blue-700 border px-12 p-2 font-semibold hover:bg-blue-800 hover:text-slate-200 duration-[400ms]'
                >
                    Ask A New Question
                </button>
        </div>
    )
}

export default AskNewQuestion
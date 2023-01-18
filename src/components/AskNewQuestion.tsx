import React from 'react'

interface AskNewQuestionProps {
    setQuestionAsked: (bool: boolean) => void,
    setQuestion: (res: string) => void
}

const AskNewQuestion = ({setQuestionAsked, setQuestion}: AskNewQuestionProps) => {
    const handleClick = () => {
        setQuestionAsked(false)
        setQuestion("Ask A Question")
    }
    return (
        <div>
            <button
                onClick={handleClick}
                className='text-blue-500 rounded-full border-blue-700 border px-12 p-2 font-semibold hover:bg-blue-800 hover:text-slate-200 duration-[400ms]'
                >
                    Ask A New Question
                </button>
        </div>
    )
}

export default AskNewQuestion
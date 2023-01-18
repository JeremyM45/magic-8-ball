import { useState } from 'react'

interface QuestionForm {
    setQuestionAsked: (bool: boolean) => void,
    setResponse: (res: string) => void,
    setError: (res: string) => void,
    setQuestion: (res: string) => void,
    question: string,
    responses: string[][]
}

const QuestionForm = ({setQuestionAsked, setResponse, setQuestion, setError, question, responses}: QuestionForm) => {
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(question.length > 3)
        {
            setQuestionAsked(true);
            setResponse(generateResponse());
            setError("")
        } else {

            setError("Ask a Question")
        }
        
    }

    const generateResponse = () => {
        const resultTypeIndex = Math.floor(Math.random() * responses.length)
        const resultIndex = Math.floor(Math.random() * responses[resultTypeIndex].length)
        return responses[resultTypeIndex][resultIndex]
    }
    
    return (
        <div className='flex items-center flex-col'>
            <form className='flex flex-col gap-y-2 items-center select-none' onSubmit={handleSubmit}>
                <input 
                    className='rounded-full px-3 text-2xl w-[20rem]' 
                    placeholder='Ask Your Question'
                    type='text'
                    onChange={(e) => setQuestion(e.target.value)}
                />
                <div className='py-2' />
                <button type='submit' className='text-blue-500 rounded-full border-blue-700 border px-12 p-2 font-semibold hover:bg-blue-800 hover:text-slate-200 duration-[400ms]'>Ask</button>
            </form>
        </div>
    )
}

export default QuestionForm
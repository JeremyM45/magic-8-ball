import React from 'react'

const QuestionForm = ({setQuestionAsked}: any) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setQuestionAsked(true)
    }
    
    return (
        <div>
            <form className='flex flex-col gap-y-2' onSubmit={handleSubmit}>
                <input className='rounded-full' placeholder='Ask Your Question'/>
                <button type='submit' className='text-blue-500 rounded-full border-blue-500 border p-2'>submit</button>
            </form>
        </div>
    )
}

export default QuestionForm
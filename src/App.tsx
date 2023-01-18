import React, { useState } from 'react';
import './App.css';
import AskNewQuestion from './components/AskNewQuestion';
import MagicBall from './components/MagicBall';
import QuestionForm from './components/QuestionForm';

function App() {
    const RESPONSES_AFFIRMATIVE = [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes definitely",
        "You may rely on it",
        "As I see it, yes",
        "Most likely",
        "Outlook good",
        "Signs point to yes"
    ]
    const RESPONSES_NONCOMMITTAL = [
        "Reply hazy, try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Try again",
    ]
    const RESPONSES_NEGATIVE = [
        "Don’t count on it",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful",
        "As I see it, no",
        "Signs point to no",
    ]
    const RESPONSES = [RESPONSES_AFFIRMATIVE, RESPONSES_NONCOMMITTAL, RESPONSES_NEGATIVE];
    const [questionAsked, setQuestionAsked] = useState(false);
    const [response, setResponse] = useState("");
    return (
        <div className="App w-screen h-full min-h-screen bg-slate-900">
            <header className="App-header flex items-center justify-center flex-col py-10">
                <h1 className="text-3xl font-bold underline text-blue-600 text-center font-rowdies">Magic 8 Ball</h1>
                <div className='py-10' />
                {questionAsked ? (<>
                    <AskNewQuestion setQuestionAsked={setQuestionAsked}/>
                </>) : (<>
                    <QuestionForm 
                        setQuestionAsked={setQuestionAsked}
                        setResponse={setResponse}
                        responses={RESPONSES}
                    />
                </>)}
                
                <div className='py-10' />
                <MagicBall 
                    response={response}
                    questionAsked={questionAsked}
                />
            </header>
        </div>
    );
}

export default App;

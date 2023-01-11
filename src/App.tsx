import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MagicBall from './components/MagicBall';
import QuestionForm from './components/QuestionForm';

function App() {
    const [questionAsked, setQuestionAsked] = useState(false);
    return (
        <div className="App w-screen h-screen bg-slate-900">
            <header className="App-header flex items-center justify-center flex-col">
                <h1 className="text-3xl font-bold underline text-blue-600 text-center">
                    Magic 8 Ball
                </h1>
                <div className='py-10' />
                <QuestionForm 
                    setQuestionAsked={setQuestionAsked}
                />
                <div className='py-10' />
                <MagicBall 
                    response='Reply hazy, try again'
                    questionAsked={questionAsked}
                />
            </header>
        </div>
    );
}

export default App;

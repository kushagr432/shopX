import React, { useEffect, useState } from 'react';

export default function QuizGame() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(true);
  const [complete, setComplete] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  useEffect(() => {
    fetchQuizQuestions();
  }, []);

  const fetchQuizQuestions = async () => {
    try {
      const response = await fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=hard');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setQuestions(data.results);
    } catch (error) {
      console.error('Error fetching quiz questions:', error);
    }
  };

  const handleStartQuiz = () => {
    setQuizStarted(true);
    setComplete(false);
    setScore(0);
    setCurrentQuestion(0);
  
  };

  const handleAnswerClick = (selectedAnswer) => {
    let isCorrect = selectedAnswer;

    if (isCorrect) {
      setScore(score + 1);
    }

    setShowFeedback(true);

    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setShowFeedback(false);
      } else {
        setComplete(true); 
        setQuizStarted(false); 
      }
    }, 1500); 

    
    setIsCorrect(isCorrect);
  };

  return (
    <>
      <div className='text-2xl font-bold'>
        <h1 className='flex justify-center'> Advance Programming Quiz</h1>
      </div>
      <div className='pt-20 pl-40 pr-40'>
        {quizStarted && !complete ? (
          <>
            {/* <p>Your score: {score} / {questions.length}</p> */}
            <div className="bg-white shadow-md rounded-lg p-10 flex flex-col shadow-2xl ">
              <div className='text-lg font-semibold pb-2'>
                <h2>Quiz Question {currentQuestion + 1}</h2>
              </div>
              <div>
                <p>{questions[currentQuestion].question}</p>
              </div>
              <div>
                <ul>
                  {questions[currentQuestion].incorrect_answers.map((answer, index) => (
                    <li key={index} className="cursor-pointer text-gray-700 hover:text-black" onClick={() => handleAnswerClick(false)}>
                      {answer}
                    </li>
                  ))}
                  <li className="cursor-pointer text-gray-700 hover:text-black" onClick={() => handleAnswerClick(true)}>
                    {questions[currentQuestion].correct_answer}
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-10 flex flex-col shadow-2xl mt-2">
              {showFeedback && (
                <p className={isCorrect ? 'text-green-500' : 'text-red-500'}>
                  {isCorrect ? 'Correct!' : 'Wrong!'}{' '}
                  {!isCorrect ? `The correct answer is "${questions[currentQuestion].correct_answer}".` : ''}
                </p>
              )}
            </div>
          </>
        ) : complete ? (
          <div className='flex justify-center space-x-4'>
            <div className='pr-15'>
            <p>Quiz Complete</p>
            <p>Your score: {score} / {questions.length}</p>
            </div>

            <button className='bg-green-400 shadow-md rounded-lg p-4 shadow-2xl ' onClick={handleStartQuiz}>Start Again</button>
          </div>
            
        ) : (
          <div className='flex justify-center'>
            <button className='bg-green-400 shadow-md rounded-lg p-4 shadow-2xl ' onClick={handleStartQuiz}>Start Quiz</button>
          </div>
        )}
      </div>
    </>
  );
}




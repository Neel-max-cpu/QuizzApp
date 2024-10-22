import React, { useState } from 'react'
import Card from './Card'



// https://opentdb.com/api_config.php -- website
// https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple

const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
};



const Hero = () => {

    const questions = [
        {
            "results": [
                {
                    "type": "multiple",
                    "difficulty": "medium",
                    "category": "Science &amp; Nature",
                    "question": "When the Falcon Heavy was launched on it&#039;s test flight, what was the only part of the operation that failed?",
                    "correct_answer": "Center Core Landing",
                    "incorrect_answers": [
                        "Side Booster Landing",
                        "Deployment of Starman",
                        "Ignition and Liftoff"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "medium",
                    "category": "Entertainment: Video Games",
                    "question": "When was Chapter 1 of the Source Engine mod &quot;Underhell&quot; released?",
                    "correct_answer": "September 1st, 2013",
                    "incorrect_answers": [
                        "March 3rd, 2011",
                        "September 12th, 2013",
                        "October 2nd, 2012"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "medium",
                    "category": "General Knowledge",
                    "question": "Which item of clothing is usually worn by a Scotsman at a wedding?",
                    "correct_answer": "Kilt",
                    "incorrect_answers": [
                        "Skirt",
                        "Dress",
                        "Rhobes"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "medium",
                    "category": "Entertainment: Video Games",
                    "question": "How many unique items does &quot;Borderlands 2&quot; claim to have?",
                    "correct_answer": "87 Bazillion ",
                    "incorrect_answers": [
                        "87 Million",
                        "87 Trillion",
                        "87 Gazillion "
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "medium",
                    "category": "General Knowledge",
                    "question": "Which of these is the name of a Japanese system of alternative medicine, literally meaning &quot;finger pressure&quot;?",
                    "correct_answer": "Shiatsu",
                    "incorrect_answers": [
                        "Ukiyo",
                        "Majime",
                        "Ikigai"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "medium",
                    "category": "Entertainment: Music",
                    "question": "In which year was the Megadeth album &quot;Peace Sells... but Who&#039;s Buying?&quot; released?",
                    "correct_answer": "1986",
                    "incorrect_answers": [
                        "1979",
                        "1987",
                        "1983"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "medium",
                    "category": "Science: Computers",
                    "question": "Nvidia&#039;s headquarters are based in which Silicon Valley city?",
                    "correct_answer": "Santa Clara",
                    "incorrect_answers": [
                        "Palo Alto",
                        "Cupertino",
                        "Mountain View"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "medium",
                    "category": "Entertainment: Video Games",
                    "question": "Which &quot;Perk-A-Cola&quot; in &quot;Call Of Duty: Zombies&quot; was &quot;reworked&quot; in &quot;Call of Duty: Black Ops II&quot;?",
                    "correct_answer": "Double Tap Root Beer",
                    "incorrect_answers": [
                        "Who&#039;s Who",
                        "Juggernog",
                        "Mule Kick"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "medium",
                    "category": "Entertainment: Video Games",
                    "question": "The original mascot of the popular Nintendo game, &quot;Splatoon&quot; was going to be...",
                    "correct_answer": "Mario",
                    "incorrect_answers": [
                        "Inklings",
                        "Octolings",
                        "Zelda"
                    ]
                },
                {
                    "type": "multiple",
                    "difficulty": "medium",
                    "category": "Entertainment: Japanese Anime &amp; Manga",
                    "question": "In JoJo&#039;s Bizarre Adventure, who says &quot;Yare yare daze&quot;?",
                    "correct_answer": "Jotaro Kujo",
                    "incorrect_answers": [
                        "Joseph Joestar",
                        "Jolyne Cujoh",
                        "Koichi Hirose"
                    ]
                }
            ]
        }
    ]


    // console.log(questions);
    // questions[0].results.forEach((questionObj) => {
    //     console.log("Category:", questionObj.category);
    //     console.log("Question:", questionObj.question);
    //     console.log("Correct Answer:", questionObj.correct_answer);
    //     console.log("Incorrect Answers:", questionObj.incorrect_answers);
    //     console.log("----------------------------");
    // });
    // console.log(questions[0].results[0].incorrect_answers)


    const quizQuestions = questions[0].results; // Your quiz data
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Track the current question
    const [selectedAnswer, setSelectedAnswer] = useState(''); // Track the selected answer

    // Get the current question
    const currentQuestion = quizQuestions[currentQuestionIndex];

    // Combine correct and incorrect answers, then shuffle them
    const answers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer].sort();

    // Handle when an answer is selected
    const handleAnswerSelect = (e) => {
        setSelectedAnswer(e.target.value);
    };

    // Handle when the "Next Question" button is clicked
    const handleNextQuestion = () => {
        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(''); // Reset the selected answer
        } else {
            alert('Quiz Complete!');
        }
    };


    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-md text-center">
                <h2 className="text-2xl font-bold mb-4">Quiz App</h2>
                <p className="text-lg font-semibold mb-2">Question {currentQuestionIndex + 1} of {quizQuestions.length}</p>
                <p className="mb-6">{currentQuestion.question}</p>

                <form className="text-left space-y-4">
                    {answers.map((answer, index) => (
                        <label key={index} className="block">
                            <input
                                type="radio"
                                name="answer"
                                value={answer}
                                className="mr-2"
                                onChange={handleAnswerSelect}
                                checked={selectedAnswer === answer}
                            />
                            {answer}
                        </label>
                    ))}
                </form>

                <button
                    className="bg-gray-500 text-white px-4 py-2 mt-6 rounded-lg hover:bg-green-500"
                    onClick={handleNextQuestion}
                    disabled={!selectedAnswer} // Disable button if no answer is selected
                >
                    Next Question
                </button>
            </div>
        </div>

        // <h1>hello</h1>
    )
}

export default Hero

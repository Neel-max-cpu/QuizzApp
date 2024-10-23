import React, { useCallback, useEffect, useState } from 'react'
// import LinearProgress from './LinearProgress';

import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'


// https://opentdb.com/api_config.php -- website

// General Knowledge---
// https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple

// anime/manga---
// https://opentdb.com/api.php?amount=10&category=31&difficulty=medium&type=multiple

// cartoon/animation ---
// https://opentdb.com/api.php?amount=10&category=32&difficulty=medium&type=multiple


// animals --
// https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple


// science and nature ---
// https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple

// history---
// https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=multiple

// geography---
// https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple






// const shuffleArray = (array) => {
//     return array.sort(() => Math.random() - 0.5);
// };



const categories = [
    { name: "General Knowledge", api: "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple" },
    { name: "Anime", api: "https://opentdb.com/api.php?amount=10&category=31&difficulty=medium&type=multiple" },
    { name: "Cartoon", api: "https://opentdb.com/api.php?amount=10&category=32&difficulty=medium&type=multiple" },
    { name: "Animals", api: "https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple" },
    { name: "Science", api: "https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple" },
    { name: "History", api: "https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=multiple" },
    { name: "Geography", api: "https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple" },
    { name: "Movies", api: "https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple" },
]


const Hero = () => {

    // hard coded question set -----
    // const questions = [
    //     {
    //         "results": [
    //             {
    //                 "type": "multiple",
    //                 "difficulty": "medium",
    //                 "category": "Science &amp; Nature",
    //                 "question": "When the Falcon Heavy was launched on it&#039;s test flight, what was the only part of the operation that failed?",
    //                 "correct_answer": "Center Core Landing",
    //                 "incorrect_answers": [
    //                     "Side Booster Landing",
    //                     "Deployment of Starman",
    //                     "Ignition and Liftoff"
    //                 ]
    //             },
    //             {
    //                 "type": "multiple",
    //                 "difficulty": "medium",
    //                 "category": "Entertainment: Video Games",
    //                 "question": "When was Chapter 1 of the Source Engine mod &quot;Underhell&quot; released?",
    //                 "correct_answer": "September 1st, 2013",
    //                 "incorrect_answers": [
    //                     "March 3rd, 2011",
    //                     "September 12th, 2013",
    //                     "October 2nd, 2012"
    //                 ]
    //             },
    //             {
    //                 "type": "multiple",
    //                 "difficulty": "medium",
    //                 "category": "General Knowledge",
    //                 "question": "Which item of clothing is usually worn by a Scotsman at a wedding?",
    //                 "correct_answer": "Kilt",
    //                 "incorrect_answers": [
    //                     "Skirt",
    //                     "Dress",
    //                     "Rhobes"
    //                 ]
    //             },
    //             {
    //                 "type": "multiple",
    //                 "difficulty": "medium",
    //                 "category": "Entertainment: Video Games",
    //                 "question": "How many unique items does &quot;Borderlands 2&quot; claim to have?",
    //                 "correct_answer": "87 Bazillion ",
    //                 "incorrect_answers": [
    //                     "87 Million",
    //                     "87 Trillion",
    //                     "87 Gazillion "
    //                 ]
    //             },
    //             {
    //                 "type": "multiple",
    //                 "difficulty": "medium",
    //                 "category": "General Knowledge",
    //                 "question": "Which of these is the name of a Japanese system of alternative medicine, literally meaning &quot;finger pressure&quot;?",
    //                 "correct_answer": "Shiatsu",
    //                 "incorrect_answers": [
    //                     "Ukiyo",
    //                     "Majime",
    //                     "Ikigai"
    //                 ]
    //             },
    //             {
    //                 "type": "multiple",
    //                 "difficulty": "medium",
    //                 "category": "Entertainment: Music",
    //                 "question": "In which year was the Megadeth album &quot;Peace Sells... but Who&#039;s Buying?&quot; released?",
    //                 "correct_answer": "1986",
    //                 "incorrect_answers": [
    //                     "1979",
    //                     "1987",
    //                     "1983"
    //                 ]
    //             },
    //             {
    //                 "type": "multiple",
    //                 "difficulty": "medium",
    //                 "category": "Science: Computers",
    //                 "question": "Nvidia&#039;s headquarters are based in which Silicon Valley city?",
    //                 "correct_answer": "Santa Clara",
    //                 "incorrect_answers": [
    //                     "Palo Alto",
    //                     "Cupertino",
    //                     "Mountain View"
    //                 ]
    //             },
    //             {
    //                 "type": "multiple",
    //                 "difficulty": "medium",
    //                 "category": "Entertainment: Video Games",
    //                 "question": "Which &quot;Perk-A-Cola&quot; in &quot;Call Of Duty: Zombies&quot; was &quot;reworked&quot; in &quot;Call of Duty: Black Ops II&quot;?",
    //                 "correct_answer": "Double Tap Root Beer",
    //                 "incorrect_answers": [
    //                     "Who&#039;s Who",
    //                     "Juggernog",
    //                     "Mule Kick"
    //                 ]
    //             },
    //             {
    //                 "type": "multiple",
    //                 "difficulty": "medium",
    //                 "category": "Entertainment: Video Games",
    //                 "question": "The original mascot of the popular Nintendo game, &quot;Splatoon&quot; was going to be...",
    //                 "correct_answer": "Mario",
    //                 "incorrect_answers": [
    //                     "Inklings",
    //                     "Octolings",
    //                     "Zelda"
    //                 ]
    //             },
    //             {
    //                 "type": "multiple",
    //                 "difficulty": "medium",
    //                 "category": "Entertainment: Japanese Anime &amp; Manga",
    //                 "question": "In JoJo&#039;s Bizarre Adventure, who says &quot;Yare yare daze&quot;?",
    //                 "correct_answer": "Jotaro Kujo",
    //                 "incorrect_answers": [
    //                     "Joseph Joestar",
    //                     "Jolyne Cujoh",
    //                     "Koichi Hirose"
    //                 ]
    //             }
    //         ]
    //     }
    // ]


    // console.log(questions);
    // questions[0].results.forEach((questionObj) => {
    //     console.log("Category:", questionObj.category);
    //     console.log("Question:", questionObj.question);
    //     console.log("Correct Answer:", questionObj.correct_answer);
    //     console.log("Incorrect Answers:", questionObj.incorrect_answers);
    //     console.log("----------------------------");
    // });
    // console.log(questions[0].results[0].incorrect_answers)

    /*

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
    )


    */




    const [questions, setQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState("")
    const [quizCompleted, setQuizCompleted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [quizStarted, setQuizStarted] = useState(false)
    const [timeLeft, setTimeLeft] = useState(15)
    const [progress, setProgress] = useState(100)
    const [selectedCategory, setSelectedCategory] = useState(null)


    const fetchQuestions = async (api) => {
        setLoading(true)
        setError(null)
        try {
            const response = await fetch(api)
            const data = await response.json()
            if (data.results && data.results.length > 0) {
                const formattedQuestions = data.results.map((q) => ({
                    question: q.question,
                    options: [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5),
                    correctAnswer: q.correct_answer,
                }))
                setQuestions(formattedQuestions)
                setQuizStarted(true)
                setTimeLeft(15)
                setProgress(100)
            } else {
                throw new Error("No questions received from the API")
            }
        } catch (error) {
            console.error("Error fetching questions:", error)
            setError("Failed to load questions. Please try again.")
        } finally {
            setLoading(false)
        }
    }



    const startQuiz = async (category) => {
        setSelectedCategory(category)
        await fetchQuestions(category.api)
    }

    // const handleAnswer = () => {
    //     if (selectedAnswer === questions[currentQuestion].correctAnswer) {
    //         setScore(score + 1)
    //     }

    //     if (currentQuestion < questions.length - 1) {
    //         setCurrentQuestion(currentQuestion + 1)
    //         setSelectedAnswer("")
    //         setTimeLeft(15)
    //     } else {
    //         setQuizCompleted(true)
    //     }
    // }

    const handleAnswer = useCallback(() => {
        if (selectedAnswer === questions[currentQuestion].correctAnswer) {
            setScore((prevScore) => prevScore + 1)
        }

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((prevQuestion) => prevQuestion + 1)
            setSelectedAnswer("")
            setTimeLeft(15)
        } else {
            setQuizCompleted(true)
        }
    }, [selectedAnswer, questions, currentQuestion])



    const restartQuiz = () => {
        setQuestions([])
        setCurrentQuestion(0)
        setScore(0)
        setSelectedAnswer("")
        setQuizCompleted(false)
        setQuizStarted(false)
        setError(null)
        setTimeLeft(15)
        setProgress(100)
        setSelectedCategory(null)
    }

    // useEffect(() => {
    //     let timer
    //     if (quizStarted && !quizCompleted && timeLeft > 0) {
    //         timer = setTimeout(() => {
    //             setTimeLeft(timeLeft - 1)
    //         }, 1000)
    //     } else if (timeLeft === 0) {
    //         handleAnswer()
    //     }
    //     return () => clearTimeout(timer)
    // }, [quizStarted, quizCompleted, timeLeft, handleAnswer]);


    useEffect(() => {
        let timer
        if (quizStarted && !quizCompleted && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prevTime) => {
                    const newTime = Math.max(prevTime - 0.1, 0)
                    setProgress((newTime / 15) * 100)
                    return newTime
                })
            }, 100)
        } else if (timeLeft <= 0) {
            handleAnswer()
        }
        return () => clearInterval(timer)
    }, [quizStarted, quizCompleted, timeLeft, handleAnswer])



    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="bg-white shadow-lg rounded-lg p-6 max-w-md text-center">
                    <p className="text-xl text-red-500">{error}</p>
                    <button onClick={startQuiz} className="bg-red-500 text-white px-4 py-2 mt-6 rounded-lg">
                        Try Again
                    </button>
                </div>
            </div>
        )
    }



    if (!quizStarted) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="bg-customGreen shadow-lg rounded-lg p-6 max-w-lg mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-4">Quiz App</h2>
                    <div className="text-center py-10">
                        <p className="text-xl mb-4">Choose a quiz category:</p>
                        <div className="flex flex-col space-y-2">
                            {categories.map((category) => (
                                <button
                                    key={category.name}
                                    onClick={() => startQuiz(category)}
                                    disabled={loading}
                                    className="bg-white text-black px-4 py-2 rounded-lg w-full"
                                >
                                    {loading && selectedCategory?.name === category.name ? (
                                        <span className="flex items-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Loading...
                                        </span>
                                    ) : (
                                        category.name
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }



    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="bg-white shadow-lg rounded-lg p-6 max-w-md text-center">
                    <p className="text-xl">Loading questions...</p>
                </div>
            </div>
        )
    }

    if (questions.length === 0) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="bg-white shadow-lg rounded-lg p-6 max-w-md text-center">
                    <p className="text-xl">No questions available. Please try again.</p>
                    <button onClick={startQuiz} className="bg-red-500 text-white px-4 py-2 mt-6 rounded-lg">
                        Reload Questions
                    </button>
                </div>
            </div>
        )
    }



    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-customGreen shadow-lg rounded-lg p-6 max-w-md">
                <h2 className="text-white text-2xl font-bold text-center mb-4">{selectedCategory.name} Quiz App</h2>
                {!quizCompleted ? (
                    <>
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">
                                Question {currentQuestion + 1} of {questions.length}
                            </h2>
                            <span className="text-lg font-medium">Time left: {Math.ceil(timeLeft)}s</span>
                        </div>
                        <Box sx={{ width: '100%' }}>
                            <LinearProgress variant="determinate" value={progress} />
                        </Box>
                        {/* <div className="mb-4">
                            <progress value={timeLeft} max="15" className="w-full" />
                        </div> */}
                        <p
                            className="text-lg mb-4"
                            dangerouslySetInnerHTML={{ __html: questions[currentQuestion].question }}
                        />
                        <div className="space-y-2">
                            {questions[currentQuestion].options.map((option, index) => (
                                <label key={index} className="block">
                                    <input
                                        type="radio"
                                        name="answer"
                                        value={option}
                                        checked={selectedAnswer === option}
                                        onChange={() => setSelectedAnswer(option)}
                                        className="mr-2"
                                    />
                                    <span dangerouslySetInnerHTML={{ __html: option }} />
                                </label>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="text-center">
                        <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
                        <p className="text-xl">Your score: {score} out of {questions.length}</p>
                    </div>
                )}
                <div className="flex justify-center mt-6">
                    {!quizCompleted ? (
                        <button
                            onClick={handleAnswer}
                            disabled={!selectedAnswer}
                            className="bg-red-500 text-white px-4 py-2 rounded-lg"
                        >
                            {currentQuestion < questions.length - 1 ? "Next Question" : "Finish Quiz"}
                        </button>
                    ) : (
                        <button onClick={restartQuiz} className="bg-red-500 text-white px-4 py-2 rounded-lg">
                            Restart Quiz
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Hero

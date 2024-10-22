import React, { useState } from 'react'
import Card from './Card'



// https://opentdb.com/api_config.php -- website
// https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple

const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
};



const Hero = () => {

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

    /*
    const [questions, setQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState("")
    const [quizCompleted, setQuizCompleted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [quizStarted, setQuizStarted] = useState(false)

    const fetchQuestions = async () => {
        setLoading(true)
        setError(null)
        try {
            const response = await fetch(
                "https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple"
            )
            const data = await response.json()
            if (data.results && data.results.length > 0) {
                const formattedQuestions = data.results.map((q) => ({
                    question: q.question,
                    options: [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5),
                    correctAnswer: q.correct_answer,
                }))
                setQuestions(formattedQuestions)
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


    const startQuiz = async () => {
        await fetchQuestions()
        setQuizStarted(true)
    }

    const handleAnswer = () => {
        if (selectedAnswer) {
            if (selectedAnswer === questions[currentQuestion].correctAnswer) {
                setScore(score + 1)
            }

            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1)
                setSelectedAnswer("")
            } else {
                setQuizCompleted(true)
            }
        }
    }

    const restartQuiz = () => {
        setQuestions([])
        setCurrentQuestion(0)
        setScore(0)
        setSelectedAnswer("")
        setQuizCompleted(false)
        setQuizStarted(false)
        setError(null)
    }

    // if(error){
    //     return (

    //     )
    // }

    // if(!quizStarted){

    // }

    // if(loading){

    // }

    // if(questions.length===0){

    // }
    */

    return (
        <div class="flex justify-center items-center h-screen">
            <div class="bg-white shadow-lg rounded-lg p-6 max-w-md text-center">
                <h2 class="text-2xl font-bold mb-4">Quiz App</h2>
                <p class="text-lg font-semibold mb-2">Question 1 of 10</p>
                <p class="mb-6">In "Jurassic World", which company purchases InGen and creates Jurassic World?</p>

                <form class="text-left space-y-4">
                    <label class="block">
                        <input type="radio" name="answer" class="mr-2" />
                        Biology Synthetics Technologies
                    </label>
                    <label class="block">
                        <input type="radio" name="answer" class="mr-2" />
                        International Genetic Technologies
                    </label>
                    <label class="block">
                        <input type="radio" name="answer" class="mr-2" />
                        International Genetic Incorporation
                    </label>
                    <label class="block">
                        <input type="radio" name="answer" class="mr-2" />
                        Masrani Global Corporation
                    </label>
                </form>

                <button class="bg-gray-500 text-white px-4 py-2 mt-6 rounded-lg hover:bg-greean">
                    Next Question
                </button>
            </div>
        </div>
    )
}

export default Hero

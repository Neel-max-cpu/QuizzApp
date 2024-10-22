import React, { useState } from 'react'




// https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple



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


const Hero = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [quizCompleted, setQuizCompleted] = useState(false)

    const handleAnswer = () => {
        if (selectedAnswer !== null) {
            if (selectedAnswer === questions[currentQuestion].correctAnswer) {
                setScore(score + 1)
            }

            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1)
                setSelectedAnswer(null)
            } else {
                setQuizCompleted(true)
            }
        }
    }

    const restartQuiz = () => {
        setCurrentQuestion(0)
        setScore(0)
        setSelectedAnswer(null)
        setQuizCompleted(false)
    }

    return (                
        <h1>hello</h1>
    )
}

export default Hero

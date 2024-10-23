import React from 'react'

// pass
// question number --
// question of the quiz
// 4 options

const Card = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-md text-center">
                <h2 className="text-2xl font-bold mb-4">Quiz App</h2>
                <p className="text-lg font-semibold mb-2">Question 1 of 10</p>
                <p className="mb-6">In "Jurassic World", which company purchases InGen and creates Jurassic World?</p>

                <form className="text-left space-y-4">
                    <label className="block">
                        <input type="radio" name="answer" className="mr-2" />
                        Biology Synthetics Technologies
                    </label>                  
                    <label className="block">
                        <input type="radio" name="answer" className="mr-2" />
                        International Genetic Technologies
                    </label>
                    <label className="block">
                        <input type="radio" name="answer" className="mr-2" />
                        International Genetic Incorporation
                    </label>
                    <label className="block">
                        <input type="radio" name="answer" className="mr-2" />
                        Masrani Global Corporation
                    </label>
                </form>

                <button className="bg-gray-500 text-white px-4 py-2 mt-6 rounded-lg hover:bg-green-500">
                    Next Question
                </button>
            </div>
        </div>
    )
}

export default Card

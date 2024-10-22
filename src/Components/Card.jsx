import React from 'react'

const Card = () => {
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

export default Card

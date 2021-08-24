const question = document.querySelector('.question')
const choices = document.querySelectorAll('.choice-text')
const questionStatus = document.querySelector('.question-status')
const scoreLive = document.querySelector('.score-live')
const loader = document.querySelector('.loader')
const game = document.querySelector('.game')
let currentQuestion = {}
let acceptingAnswers = false
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = []

const correctBonus = 10
const maxQuestions = 3

const fetchQuestion = async () => {
    try {
        const response = await fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=multiple')
        const data = await response.json()
        const results = data.results
        questions = results.map(result => {
            const formattedQuestion = {
                question: result.question
            }
            const answerChoices = [...result.incorrect_answers]
            formattedQuestion.answer = Math.floor(Math.random() * 3) + 1
            answerChoices.splice(formattedQuestion.answer - 1, 0, result.correct_answer)
            
            answerChoices.forEach((choice, index) => {
                formattedQuestion['choice' + (index+1)] = choice
            })

            return formattedQuestion
        })

        startGame()

    } catch (error) {
        alert('Failed to load questions')
    }
}

fetchQuestion()

const startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
    game.classList.remove('hidden')
    loader.classList.add('hidden')
}

const getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter >= maxQuestions) {
        // save score and carry it to end page
        localStorage.setItem('mostRecentScore', score)
        // go to the end page
        return window.location.assign('/end.html')
    }
    questionCounter++
    questionStatus.innerText = `${questionCounter}/${maxQuestions}`

    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionIndex, 1)

    acceptingAnswers = true
}

const incrementScore = num => {
    score += num
    scoreLive.innerText = score
}

// Event Listener for clicking each choice
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
        if(classToApply === 'correct') {
            incrementScore(correctBonus)
        }
        selectedChoice.parentElement.classList.add(classToApply)
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
        
    })
})

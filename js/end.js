const saveBtn = document.querySelector('.save-btn') 
const form = document.querySelector('.form')
const username = document.getElementById('username')
const mostRecentScore = localStorage.getItem('mostRecentScore')
const finalScore = document.querySelector('.final-score')
finalScore.innerText = mostRecentScore

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const maxHighScores = 5

const saveHighScore = (e) => {
    e.preventDefault()

    const score = {
        score: Math.floor(Math.random() * 100),
        name: username.value
    }
    highScores.push(score)
    
    highScores.sort((a,b) => b.score - a.score)

    highScores.splice(5)
    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('/')
    
}

username.addEventListener('keyup', () => {
    saveBtn.disabled = !username.value
})

// saveBtn.addEventListener('click', saveHighScore)
form.addEventListener('submit', saveHighScore)

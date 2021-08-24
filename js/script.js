// const quizData = [
//     {
//         question: "Which language runs in a web browser?",
//         a: "Java",
//         b: "C",
//         c: "Python",
//         d: "JavaScript",
//         correct: "d",
//     },
//     {
//         question: "What does CSS stand for?",
//         a: "Central Style Sheets",
//         b: "Cascading Style Sheets",
//         c: "Cascading Simple Sheets",
//         d: "Cars SUVs Sailboats",
//         correct: "b",
//     },
//     {
//         question: "What does HTML stand for?",
//         a: "Hypertext Markup Language",
//         b: "Hypertext Markdown Language",
//         c: "Hyperloop Machine Language",
//         d: "Helicopters Terminals Motorboats Lamborginis",
//         correct: "a",
//     },
//     {
//         question: "What year was JavaScript launched?",
//         a: "1996",
//         b: "1995",
//         c: "1994",
//         d: "none of the above",
//         correct: "b",
//     },
// ];

const quiz = document.querySelector('.quiz')
const answerElements = document.querySelectorAll('.answer')
const question = document.querySelector('.question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const btn = document.querySelector('.submit-btn')
const currentQuiz = 0
let score = 0
let choice = ''
let correctAnswer;
 
// const getQuiz = async () => {
//     deselectAll()
//     try {
//         const res = await fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple')
//         const data = await res.json()
        
        // const quizData = data.results[currentQuiz]
        // console.log(quizData)
        // question.innerText = quizData.question
        // const answers = [...quizData.incorrect_answers, quizData.correct_answer]
        // const shuffledAnswers = answers.sort((a,b) => 0.5 - Math.random())
        // console.log(shuffledAnswers)
        // a_text.innerText = shuffled[0]
        // b_text.innerText = shuffled[1]
        // c_text.innerText = shuffled[2]
        // d_text.innerText = shuffled[3]
       
    
    // } catch (error) {
    //     alert(error)
    // }

    // btn.addEventListener('click', () => {
    //     let choice = ''
    //     answerElements.forEach((item, i) => {
    //         if(item.checked) {
    //             choice = item
    //             if(item.parentElement.innerText === quizData.correct_answer) {
    //                 console.log('yes')
    //             }
    //         }
    //     })
    //    return choice
    // })
    
// }

const deselectAll = () => {
    answerElements.forEach(answer => answer.checked = false)
}

// btn.addEventListener('click', () => {
//     let choice = ''
//     answerElements.forEach((item, i) => {
//         if(item.checked) {
//             choice = item
//             if(item.parentElement.innerText ) {
//                 console.log('yes')
//             }
//         }
//     })
//    return choice
// })

// getQuiz()
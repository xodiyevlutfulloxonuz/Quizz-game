const quizData=[
    {
        question:"Which language runs in a web browser",
        a:"Java",
        b:"C",
        c:"Python",
        d:"Javascript",
        correct:"d"
    },
    {
        question:"What does CSS stand for?",
        a:"Central Style Sheets",
        b:"Cascading Style Sheets",
        c:"Cascading Simple Sheets",
        d:"Cascading Style Sheet",
        correct:"b"
    },
    {
        question:"cont arr=[1,2,3]   console.log(arr[3])",
        a:"3",
        b:"undefined",
        c:"Reference Error",
        d:"null",
        correct:"b"
    },
    {
        question:" let name  console.log(name)",
        a:"Syntax Error ",
        b:"Null",
        c:"Undefined",
        d:"name",
        correct:"c"
    },
    {
        question:"let  number=2021 let result=number++ console.log(result) ",
        a:"2022",
        b:"2023",
        c:"Undefined",
        d:"2021",
        correct:"d"
    }
]
const quiz=document.querySelector('#quiz')
const answerEls=document.querySelectorAll('.answer')
const questionEls=document.querySelector('#question')
const a_text=document.querySelector('#a_text')
const b_text=document.querySelector('#b_text')
const c_text=document.querySelector('#c_text')
const d_text=document.querySelector('#d_text')
const btn=document.querySelector('#submit')

let currentQuiz=0
let score=0
loadQuiz()

function  loadQuiz() {
    deselectAnswers()
    const currentQuizData=quizData[currentQuiz]
    questionEls.innerHTML=currentQuizData.question
    a_text.innerHTML=currentQuizData.a
    b_text.innerHTML=currentQuizData.b
    c_text.innerHTML=currentQuizData.c
    d_text.innerHTML=currentQuizData.d

}
function deselectAnswers() {
    answerEls.forEach(element=>element.checked=false)

}

function getSelected(){
    let answer
    answerEls.forEach(answerEl=>{
        if (answerEl.checked){
            answer=answerEl.id


        }
    })
    return answer
}


btn.addEventListener('click',()=>{
  const answer =getSelected()
    if (answer){
        if (answer===quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++

        if (currentQuiz<quizData.length){
            loadQuiz()
        } else {
            quiz.innerHTML=`
            <h2> You answered correctly at ${score}/${quizData.length}</h2>
            <button onclick="location.reload()"> Reload</button>
            `
        }

    }


   

   
   
})



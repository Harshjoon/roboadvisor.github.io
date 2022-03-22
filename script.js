const startButton = document.getElementById('start-anchor')
const questionContainerElement  = document.getElementById('question-container')
const evalContainerElement  = document.getElementById('eval-container')
const containerElement  = document.getElementById('container')

var responses = []

const questions = [
    {
        question: '1. Which of the following best describes your current stage of life?',
        options: [
            { text: "You have few financial burdens. You are ready to accumulate wealth for future short-term and long-term goals. ", point: 6},
            { text: "You are preparing for the future by establishing a home. You may or may not have children. You are expecting to have or already have a high purchase rate of household and consumer items. ", point: 2},
            { text: "You own your own home. You have a mortgage and potentially childcare or other regular costs and maintain only small cash balances. ", point: 1},
            { text: "You are in your peak earning years and your mortgage is under control. You work and you may or may not have children that are growing up or have left home. You may be ready to start thinking about your retirement years. ", point: 4},
            { text: "You are preparing for retirement. You own your home and have few financial burdens. You want to ensure you can afford a comfortable retirement.", point: 3},
            { text: "You are retired. You rely on existing funds and investments to maintain your lifestyle in retirement. You may already be receiving a government pension and/or superannuation pension. ", point: 1}
        ]
    },
    {
        question: '2. What is the primary reason you are investing your funds?',
        options: [
            { text: "Long-term capital growth", point: 6},
            { text: "To meet income needs", point: 4},
            { text: "Long-term capital growth and income ", point: 3},
            { text: "For capital security", point: 1}
        ]
    },
    {
        question: '3. How secure is your current and future income from your salary, pensions or other investments?',
        options: [
            { text: "Not secure", point: 1},
            { text: "Somewhat secure", point: 3},
            { text: "Fairly secure", point: 4},
            { text: "Very secure", point: 6}
        ]
    },
    {
        question: '4. What would you estimate your net worth to be, that is total assets excluding the family home less liabilities? ',
        options: [
            { text: "Less than Rs20,50,000", point: 1},
            { text: "Between Rs25,00,000 and Rs50,00,000", point: 3},
            { text: "Between Rs50,00,000 and Rs70,50,000", point: 4},
            { text: "Between Rs70,50,000 and Rs1,00,00,000 ", point: 5},
            { text: "Greater than Rs1,00,00,000 ", point: 6}
        ]
    },
    {
        question: '5. How familiar are you with investment matters? ',
        options: [
            { text: "Not familiar at all with investments and feel uncomfortable with the complexity.", point: 1},
            { text: "Not very familiar when it comes to investments. ", point: 3},
            { text: "Somewhat familiar. I don’t fully understand investments, including the sharemarket. ", point: 4},
            { text: "Fairly familiar. I understand the various factors which influence investment performance. ", point: 5},
            { text: "Very familiar. I use research and other investment information to make investment decisions. I understand the various factors which influence investment performance", point: 6}
        ]
    },
    {
        question: '6. In order to earn a return above the level of bank interest rates you may need to hold investments that go up and down in value (i.e. have volatility). How important is it to you to protect your investment and minimise the prospect of any fall in the value? ',
        options: [
            { text: "Very important. Protecting my existing investment is my main objective. ", point: 1},
            { text: "Important, but I’m comfortable for at least a small part of my portfolio to have volatility in order to improve returns over the longer term. ", point: 3},
            { text: "Somewhat important but I’m prepared to take on a reasonable amount of volatility in order to increase my chance of higher returns over the longer term.", point: 4},
            { text: "Not particularly important as I’m comfortable that having exposure to volatility is the best way to maximise returns over the longer term. ", point: 6}
        ]
    },
    {
        question: '7. What is your level of reliance on the income generated from the portfolio to meet your needs? ',
        options: [
            { text: "Nil. I have other income sources.", point: 6},
            { text: "Minimal. I have other income sources but the income from the portfolio does help.", point: 4},
            { text: "Reasonable. I rely somewhat on the income generated from the portfolio.", point: 3},
            { text: "Considerable. I rely heavily on the income generated from the portfolio", point: 1}
        ]
    },
    {
        question: '8. How long are you looking at investing your capital before you think you would need to access it? (Assuming you already have plans in place to meet short-term cashflow and/or emergencies.)',
        options: [
            { text: "In 2 years or less", point: 1},
            { text: "Within 3 - 5 years", point: 3},
            { text: "Within 6 - 10 years", point: 4},
            { text: "Not for 10+ years", point: 6}
        ]
    },
    {
        question: '9. When considering your investments and making investment decisions, do you think about the impact of possible losses or possible gains?',
        options: [
            { text: "I am always concerned about possible losses.", point: 1},
            { text: "I am somewhat concerned about possible losses.", point: 3},
            { text: "I usually consider possible gains.", point: 4},
            { text: "I always consider possible gains.", point: 6}
        ]
    },
    {
        question: '10. Assume you had an initial investment portfolio worth Rs10,00,000. If, due to market conditions, your portfolio fell to Rs8,50,000, would you:',
        options: [
            { text: "Sell all of the investments? You do not intend to take risks.", point: 1},
            { text: "Sell a portion of your portfolio to cut your losses and reinvest into more secure investment assets?", point: 3},
            { text: "Hold the investment and sell nothing, expecting performance to improve?", point: 4},
            { text: "Invest more funds to lower your average investment price?", point: 6}
        ]
    }
]




let shuffledQuestions, currentQuestionIndex

const questionElement = document.getElementById('questions')
const answerButtonsElements = document.getElementById('answer-btn')
const nextButton  = document.getElementById('next-btn')
const exitButton  = document.getElementById('exit-btn')
const finishButton  = document.getElementById('finish-btn')
var optionSelected = false
var totalPoints = 0


//console.log(evalContainerElement.getElementsByTagName('button')[1])

exitButton.addEventListener('click', () => {
    console.log("exited")
    currentQuestionIndex = 0
})

startRoboAdvisor()
nextButton.addEventListener('click', () => {
    //console.log(optionSelected)
    if (optionSelected == true){   
        if (currentQuestionIndex == questions.length - 1) {
            //saveResults()
            endRoboAdvisor()
            //console.log(totalPoints)
                 
        } 
        else if ( currentQuestionIndex < questions.length - 1){
            console.log(currentQuestionIndex)
            currentQuestionIndex++
            setNextQuestion()}
            window.scrollTo(0,0);
    }
})

function startRoboAdvisor(){
    responses = []
    console.log('Robo advisor started')
    //console.log(questions.length)
    currentQuestionIndex = 0
    setNextQuestion()
    
    //shuffledQuestions = questions.sort(() =>  Math.random() - .5) 
}
  


function setNextQuestion(){
    optionSelected = false
    resetState()
    showQuestion(questions[currentQuestionIndex])   
}

function showQuestion(question) {
    questionElement.innerText = question.question
    

    question.options.forEach( option => {
        linebreak = document.createElement("br")
        linebreak2 = document.createElement("br")
        //console.log(option)
        const button = document.createElement('button')
        button.innerText = option.text
        button.classList.add('btn-hero')
        button.addEventListener('click', function() {
            //console.log('button clicked')
            optionSelected = true

            buttons = answerButtonsElements.getElementsByTagName("button")
            for ( var i = 0; i < buttons.length; i++){
                //console.log(buttons[i])
                buttons[i].classList.remove('btn-hero-select')
                buttons[i].classList.add('btn-hero')
            }
            button.classList.add('btn-hero-select')
            var response = { point : option.point }
            responses.push(response)
            //console.log(response)
        })

        //answerButtonsElements.innerHTML += '<br>'
        answerButtonsElements.appendChild(linebreak)
        answerButtonsElements.appendChild(linebreak2)
        answerButtonsElements.appendChild(button)
        
    })
}


function saveResponse(e) {
    //console.log('button clicked')
    //console.log(option)
    var response = { Points : e.currentTarget.option.point }
    responses.push(response)
}

function resetState() {
    while(answerButtonsElements.firstChild) {
        answerButtonsElements.removeChild(answerButtonsElements.firstChild)
    }
}


function endRoboAdvisor() {
    
    //console.log(evalContainerElement)
    //console.log(responses)
    for ( var i = 0; i < responses.length; i++) {
        totalPoints += responses[i].point
    }
    //category = scoreToCategory(totalPoints)
    console.log(totalPoints)
    //localStorage.setItem("category", category)
    localStorage.setItem("score", totalPoints)
    //console.log(totalPoints)
    
    console.log("Robo advisor has ended")
    resetState()
    questionElement.innerText = "Survey has ended. Please click finish to see results"

    nextButton.classList.add('hide')
    finishButton.classList.remove('hide')
    evalContainerElement.appendChild(finishButton)
    //console.log(evalContainerElement)
}


finishButton.addEventListener('click', () => {
    currentQuestionIndex = 0
    //showResults()
})

const qTitle = document.getElementById('question-title')
const resultContainer = document.getElementById('results')
const scoreDetail = document.getElementById('score-detail')
const category_section = document.getElementById('category')

// function showResults(){
//     qTitle.classList.add('hide')
//     containerElement.classList.add('hide')
//     resultContainer.classList.remove('hide')
//     scoreDetail.append(': '+String(totalPoints))
//     finishButton.classList.add('hide')
//     category = scoreToCategory(totalPoints)
//     localStorage.setItem("category", category)
//     localStorage.setItem("score", totalPoints)  
//     category_section.append('Robo Advisor recomends ' + category + ' Investing profile for you.')
// }

function saveResults(){
    //qTitle.classList.add('hide')
    //containerElement.classList.add('hide')
    //resultContainer.classList.remove('hide')
    //scoreDetail.append(': '+String(totalPoints))
    //finishButton.classList.add('hide')
    // category = scoreToCategory(totalPoints)
    // console.log(totalPoints)
    // localStorage.setItem("category", category)
    // localStorage.setItem("score", totalPoints)  
    //category_section.append('Robo Advisor recomends ' + category + ' Investing profile for you.')
}


function scoreToCategory(points) {
    category = ''
    switch (true) {
        case (points <= 12):
            category = 'a Defensive';
            break;
        case (points > 12 && points <= 24 ):
            category = 'a Conservative';
            break;
        case (points > 24 && points <= 36 ):
            category = 'a Balanced';
            break;
        case (points > 36 && points <= 48 ):
            category = 'an Assertive';
            break;
        case (points > 48):
            category = 'an Aggressive';
            break;
    }
    return category

}

console.log("Rock, paper, scissors.")

choiceArr = ['Rock', 'Paper', 'Scissors']

button1 = document.getElementById("b1")
button2 = document.getElementById("b2")
button3 = document.getElementById("b3")
button4 = document.getElementById("b4") //reset

class ScoreAndGames {
    static score = 0;
    static gamesPlayed = 0;

    static getScore() {
        return this.score;
    }
    static updateScore() {
        this.score++;
    }
    static getGamesPlayed() {
        return this.gamesPlayed;
    }
    static updatePlays(){
        this.gamesPlayed++;
    }
    static reset(){
        this.score = 0;
        this.gamesPlayed = 0;
    }
}

console.log("Current ScoreAndGames: ", ScoreAndGames.getScore());


button1.addEventListener('click', () => {           
    run(1)
})
button2.addEventListener('click', () => {
    run(2)
})
button3.addEventListener('click', () => {
    run(3)
})


button4.addEventListener('click', () => {
    document.getElementById("p").innerHTML = "Result"
    document.getElementById("p1").innerHTML = 0
    document.getElementById("p2").innerHTML = 0
    document.getElementById("pChoice").innerHTML = "Your Choice"
    document.getElementById("cChoice").innerHTML = "Computer's Choice"
    ScoreAndGames.reset()
})


function run(pressedButton) {
    console.log(`${pressedButton} pressed`)

    ScoreAndGames.updatePlays();  
    document.getElementById("p2").innerHTML = ScoreAndGames.getGamesPlayed();

    let x
    let compChoice= Math.floor(Math.random() * 3) + 1;
    console.log(`computer chose ${compChoice}`)
    switch (compChoice) {
        case (1):
            x = choiceArr[0]
            break;
        case (2):
            x = choiceArr[1]
            break;
        case (3):
            x = choiceArr[2]
            break;
    }
    document.getElementById("cChoice").innerHTML = `Computer chose ${x}`
    let res

        switch (pressedButton) {
            case (1):
                document.getElementById("pChoice").innerHTML = `You chose ${choiceArr[0]}`
                if (compChoice== 2) 
                    res = 2
                else if (compChoice== 3) 
                    res = 1
                else 
                    res = 3
                break;
            case (2):
                document.getElementById("pChoice").innerHTML = `You chose ${choiceArr[1]}`
                if (compChoice== 1) 
                    res = 1
                else if (compChoice== 3) 
                    res = 2
                elses
                    res = 3
                break;
            case (3):
                document.getElementById("pChoice").innerHTML = `You chose ${choiceArr[2]}`
                if (compChoice== 2) {
                    res = 1
                }
                else if (compChoice== 1) {
                    res = 2
                }
                else {
                    res = 3
                }
                break;
        }

    result(res)
}

function result(res) {
    if (res == 1) {
        document.getElementById("p").innerHTML = "You Win"
        ScoreAndGames.updateScore();
        document.getElementById("p1").innerHTML = ScoreAndGames.getScore();
    }
    else if (res == 2) {
        document.getElementById("p").innerHTML = "You Lose"
    }
    else if (res == 3) {
        document.getElementById("p").innerHTML = "Draw"
    }
}



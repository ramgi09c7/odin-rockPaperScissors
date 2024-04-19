let PLAYER_WINS_NUM = 0
let COMPUTER_WINS_NUM = 0

function getRandomInt(max){
    return Math.floor(Math.random() * max)
}

function getComputerChoice(){
    // return rock paper or scissors
    let choice = getRandomInt(3)

    if (choice === 1){
        return "ROCK"
    } else if (choice === 2){
        return "PAPER"
    } else {
        return "SCISSORS"
    }
}

function playRound(playerSelection, computerSelection){
    // strings that declares the winner or tie
    // 0: tie, 1: player win: -1 computer win
    if (playerSelection === computerSelection){
        return 0
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        return -1
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        return 1
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        return 1
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        return -1
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        return -1
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        return 1
    } else {
        return -99
    }
}

function playGameOld(userInput){
    let player = 0
    let computer = 0
    for (let i = 1; i<=5; i++){
        console.log("Round " + i + " Start!")
        //let userInput = prompt().toUpperCase()
        let computerInput = getComputerChoice()
        let status = playRound(userInput, computerInput)
        if (status === 1){
            player++
            console.log("Round " + i + ": Player win! (" + userInput + "|" + computerInput + ")")
        } else if (status === -1){
            computer++
            console.log("Round " + i + ": Computer win! (" + userInput + "|" + computerInput + ")")
        } else {
            console.log("Round " + i + ": Tie! (" + userInput + "|" + computerInput + ")")
        }
    }
    if (player>computer) {
        console.log("PLAYER wins the game!!!")
    } else {
        console.log("COMPUTER wins the game!!!")
    }
}

function deleteAllChild(node){
    node.innerHTML = ""
}

function playGame(userInput){
    let computerInput = getComputerChoice()
    let status = playRound(userInput, computerInput)
    const div_result = document.querySelector(".result")
    const container_scoreboard = document.querySelector(".container-scoreboard")
    const scoreboard = document.querySelector(".scoreboard")
    deleteAllChild(container_scoreboard)
    if (status === 1){
        const outcomeText = "PLAYER WIN! Player: " + userInput + "| Computer: " + computerInput   
        PLAYER_WINS_NUM++
        const p = document.createElement("p")
        p.textContent = outcomeText
        div_result.appendChild(p)
        
        scoreboard.textContent = "PLAYER: " + PLAYER_WINS_NUM + " || COMPUTER: " + COMPUTER_WINS_NUM
        container_scoreboard.appendChild(scoreboard)
        
    } else if (status === -1){
        const outcomeText = "COMPUTER WIN! Player: " + userInput + "| Computer: " + computerInput
        COMPUTER_WINS_NUM++
        const p = document.createElement("p")
        p.textContent = outcomeText
        div_result.appendChild(p)

        scoreboard.textContent = "PLAYER: " + PLAYER_WINS_NUM + " || COMPUTER: " + COMPUTER_WINS_NUM
        container_scoreboard.appendChild(scoreboard)
    } else {
        const outcomeText = "TIE! Player: " + userInput + "| Computer: " + computerInput
        const p = document.createElement("p")
        p.textContent = outcomeText
        div_result.appendChild(p)

        scoreboard.textContent = "PLAYER: " + PLAYER_WINS_NUM + " || COMPUTER: " + COMPUTER_WINS_NUM
        container_scoreboard.appendChild(scoreboard)
    }
}



const div_game_buttons = document.querySelector(".game-buttons")

div_game_buttons.addEventListener("click", (event) => {

    let target = event.target

    switch(target.id){
        case "btn-rock":
            playGame("ROCK")
            break
        case "btn-paper":
            playGame("PAPER")
            break
        case "btn-scissors":
            playGame("SCISSORS")
            break
    }
})


document.querySelector(".del-btn").addEventListener("click", () => {
    deleteAllChild(document.querySelector(".result"))
})


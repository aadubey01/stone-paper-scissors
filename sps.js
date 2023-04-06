function computerPlay(compChoice){
    let choiceNum = Math.floor(Math.random() * 3);
    if (choiceNum == 0){
        compChoice.Value = "rock";
    }
    else if (choiceNum == 1){
        compChoice.Value = "paper";
    }
    else if(choiceNum == 2){
        compChoice.Value = "scissors";
    }
    console.log(choiceNum);
    return choiceNum;
}

        
    function playRound(playerSelection,computerSelection){
        if(playerSelection === computerSelection){
            console.log("Tie!");
        }
        if(playerSelection==="ROCK" && computerSelection==="SCISSORS"||
        playerSelction==="PAPER" && computerSelection==="ROCK" ||
        playerSelection==="SCISSORS"  && computerSelection==="PAPER"){
            console.log("YOU WIN!!");
        }
        if (
    computerSelection ===  'ROCK' && playerSelection === 'SCISSORS' ||
    computerSelection === 'SCISSORS' && playerSelection === 'PAPER' ||
    computerSelection === 'PAPER' && playerSelection === 'ROCK'){
        console.log("YOU LOSE!!!!");
    }
    }


   function game(){
    let computerSelection={Value:""};
    let compChoiceInt;
    let playerChoiceInt;
    let playerChoice;

    for (let i = 0; i < 5; i++){
        playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
        if (playerSelection ==="rock"){
            playerChoiceInt = 0;
        }
        else if (playerSelection === "paper"){
            playerChoiceInt = 1;
        }
        else if (playerSelection === "scissors")
        {
            playerChoiceInt = 2;
        }
        compChoiceInt = computerPlay(compChoice);
        playRound(playerSelection,computerSelection);
    }
       return game;
    
}

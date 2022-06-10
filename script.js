function computerPlay() {
    let option=Math.floor(Math.random() * 4) + 1;
    if (option==1) {
        return ("rock")
    } else if (option==2) {
        return ("paper")
    } else {
        return ("scissors")
    } 
    
}

function playerPlay() {
    let option=prompt("choose between rock , paper or scissors");
    if (option==null||option==undefined) {
        console.log("invalid option, try again");
        return
    }
    if (option.toLowerCase()!="rock"&&option.toLowerCase()!="paper"&&option.toLowerCase()!="scissors") {
        console.log("invalid option, try again");
        return
    }
    if (option.toLowerCase()=="rock") {
        return ("rock")
    } else if (option.toLowerCase()=="paper") {
        return ("paper")
    } else {
        return ("scissors")
    }
}

function playRound(playerOption, computerOption) {
    let result;
    if (playerOption==computerOption) {
        result="tie" ;
        return (result)
    }
    if ((playerOption=="rock"&&computerOption=="scissors")||(playerOption=="paper"&&computerOption=="rock")||(playerOption=="scissors")&&(computerOption=="paper")) {
        result=`player wins ${playerOption} beats ${computerOption}`;
    } else {
        result=`computer wins ${computerOption} beats ${playerOption}`;
    }
    return (result) 
}

function game() {
    let computerScore=0;
    let playerScore=0;
    let result;
    for (let i = 0; i < 5; i++) {
        playerOption=playerPlay();
        computerOption=computerPlay();
        result = playRound(playerOption, computerOption)
        console.log(result);
        if (result.charAt(0)=="c") {
            computerScore++;
        } else if (result.charAt(0)=="p") {
            playerScore++;
        }
     }
     if (computerScore>playerScore) {
         return (`player wins with a score of ${playerScore} versus the computer which had a score of ${computerScore}`)
     } else if (computerScore<playerScore) {
         return (`player wins with a score of ${playerScore} versus the computer which had a score of ${computerScore}`)
     } else {
         return ("tie")
     }
}

console.log(game())

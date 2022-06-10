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

let playerOption=playerPlay();
let computerOption=computerPlay();
console.log(playRound(playerOption, computerOption));

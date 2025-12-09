let userScore = 0 ;
let computerScore = 0;
let userChoice ;
let choices =["rock" , "paper" , "scissor"];
let emojis = {
    "rock" : "👊🏻" ,
    "paper" : "📃" ,
    "scissor" : "✂"
};

function game (){
    const computerChoice = choices[Math.floor (Math.random() * 3)]  //0-2
    let result = "" ;
    if(userChoice===computerChoice){
        result = "it's a tie 🤝🏻 , Try again ! " ;
    }
    else if (userChoice === "rock" && computerChoice === "scissor" || userChoice === "paper" && computerChoice === "rock" || userChoice === "scissor" && computerChoice === "paper"){
        result = `You win ! 🎉 You choose ${emojis[userChoice]} and Computer choose ${emojis[computerChoice]}` ;

        userScore++;
    }
    else {
                result = `Computer wins ! 🎉 Computer choose ${emojis[computerChoice]} and You choose ${emojis[userChoice]}` ;
                computerScore++;
    }
    document.getElementById("result").innerHTML = result ;
    document.getElementById("score").innerHTML =  `Score: You - ${userScore}, Computer - ${computerScore} `;
}
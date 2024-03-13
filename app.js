let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score");

const generateComputerChoice=()=>{
    const options=["rock","papper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];

}

const drawGame=()=>{
    msg.innerText="Game was draw.Play again.";
    msg.style.backgroundColor="#081b31";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;        
        msg.innerText=`You Win!.${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lose.${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const playGame=((userChoice)=>{
     console.log("userChoice",userChoice);
     //Generate Computer choice
     const compChoice=generateComputerChoice();
     console.log("computerChoice",compChoice);
     if(userChoice===compChoice){
        //draw game
        drawGame();
     }else
     {
              let userWin=true;
              if(userChoice==="rock"){
            //scissor ,papper
               userWin= compChoice==="papper"? false:true;
              }else if(userChoice==="papper"){
            //rock ,scissor
               userWin=compChoice==="scissor"?false:true;
              }else{
            //papper,scissor
               userWin=compChoice==="rock"?false:true;

              }
             showWinner(userWin,userChoice,compChoice);
      }
})

choices.forEach((choice)=>{
     
    choice.addEventListener("click",() =>{
        const userChoice= choice.getAttribute("id");
         playGame(userChoice);
    })
})
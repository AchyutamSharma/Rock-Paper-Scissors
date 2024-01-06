let paper = document.getElementById("paper-img");
let rock = document.getElementById("rock-img");
let scissors = document.getElementById("scissors-img");
let showWin = document.getElementById("inner-show");

let userScore = document.getElementById("userScore");
let comScore = document.getElementById("comScore");
let DrawScore = document.getElementById("DrawScore");
let reset = document.getElementById("reset");
let userWin = 0;
let ComWin = 0;
let DrawWin = 0;

let randomNumber;

function guessNum(){
    randomNumber = Math.floor(Math.random()*100);
    console.log(randomNumber);
    
    if (randomNumber <= 24) {
        console.log("You win");
        ++userWin;
        youWin();
        console.log("Range <= 24");
    } else if ( randomNumber >= 25 && randomNumber <= 40) {
        console.log("Match Draw");
        ++DrawWin;
        drawMatch();
        console.log("Range += 25 - 40");
    } else if ( randomNumber >= 41) {
        console.log("You Loss");
        ++ComWin;
        CompWin();
        console.log("Range += 41");
    } 
    
    console.log("------ End Here ------");

};

let drawMatch = () => {
    showWin.innerText = " Match was Draw";
    DrawScore.innerText = `${DrawWin}`;
};
let youWin = () =>{
    showWin.innerText = " Congratulation, You Win the Match";
    userScore.innerText = userWin;
};
let CompWin = () =>{
    showWin.innerText = "You Loss the Match, Computer Win";
    comScore.innerText = ComWin;
};



paper.addEventListener("click",()=>{
    console.log("Tap on Paper");
    guessNum(); 
       
});

rock.addEventListener("click",()=>{
    console.log("Tap on Rock");
    guessNum();
});

scissors.addEventListener("click",()=>{
    console.log("Tap on Scissors");
    guessNum();
});

reset.addEventListener("click",()=>{
    location.reload();
});

const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const newGame = document.querySelector(".btn");


let currentPlayer ;
let gameGrid;

const winningPosition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
// let s create a function to initialse the game 

function initGame(){
    currentPlayer = "X";
    gameGrid = ["","","","","","","","",""];
    boxes.forEach((box, index) => {
            box.innerText = "";
            boxes[index].style.pointerEvents = "all";

            
        box.classList = `box box${index+1}`;
    });
    newGame.classList.remove("active");
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
    
}


initGame();


newGame.addEventListener("click" ,() =>{
         initGame();
});


   function SwapTurn(){
    if(currentPlayer === "X"){
        currentPlayer = "O";
    }
    else{
        currentPlayer = "X";

    }

     gameInfo.innerText = `Current Player - ${currentPlayer}`;

   }

   function checkGameOver(){

    let answer = "";

    winningPosition.forEach((position) =>{
    if((gameGrid[position[0]] !== "" || gameGrid[position[1]]!== "" || gameGrid[position[2]]!=="")
        &&(gameGrid[position[0]] == gameGrid[position[1]])&&(gameGrid[position[1]] === gameGrid[position[2]])){
    
            if(gameGrid[position[0]] == "X")
                answer = "X";
            else
                answer = "O";
            
            // disable pointer events 

            boxes.forEach((box) =>{
                box.style.pointerEvents= "none";
            })


            // now we know X/O is a winner

            boxes[position[0]].classList.add("win");
            
            boxes[position[1]].classList.add("win");

            boxes[position[2]].classList.add("win");
        } 
   });


   if(answer !== "" ){
     gameInfo.innerText = `Winner player - ${answer}`;
     newGame.classList.add("active");
     return;
   }

   // lets check wheater there is tie

   let fillCount = 0;
   gameGrid.forEach((box)=>{
    if(box !== "")
        fillCount++;
   });

   if(fillCount === 9){
    gameInfo.innerText = "Game Tied !" ;
    newGame.classList.add
   }

}

function handleClick(index){
    if(gameGrid[index] === "" ){
        boxes[index].innerText = currentPlayer;
        gameGrid[index] = currentPlayer;
         boxes[index].style.pointerEvents = "none";

        SwapTurn();

       checkGameOver();

    }
}


boxes.forEach((box,index) => {
    box.addEventListener("click",()=>{
        handleClick(index);
    });
});
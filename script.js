
// // set variable for player text and restart button
let playerText= document.getElementById('playerText')

let restartBtn = document.getElementById('restart')

// // Got the div element by Class Name of box and set it equal to boxes;the boxes are set up as an array
let boxes = Array.from(document.getElementsByClassName('box'))


// Current Player is set to X
const oText = 'O'
const xText = 'X'
let currentPlayer = xText
// //the array of boxes is set to null to empty boxes
let spaces = Array(9).fill("")


//an event listener is added to each box so the user can click on it
const startGame = ()=> {
    boxes.forEach(box => box.addEventListener('click',boxClicked))

// boxClicked function targets each box by id and sets it to current player
function boxClicked(e) {
    const id = e.target.id
    if(!spaces[id]){
        spaces[id]= currentPlayer
        e.target.innerText=currentPlayer

        if(playerWins() !==false) {
            playerText = `${currentPlayer} wins!`
        }

        currentPlayer=currentPlayer == xText ? oText: xText

}
function playerWins(){
    for(const condition of winningCombos){
        let [a,b,c] = condition
        
        if(spaces[a] && (spaces [a]== spaces[b] && spaces[a] == (spaces[c]))){
            return ( [a,b,c]);
            
        }
        
    }
return false;
    
}
playerWins()
}

// winning combinations for game
const winningCombos = [
    //horizontal by index
    [0,1,2],
    [3,4,5],
    [6,7,8],
    //vertical
    [0,3,6],
    [1,4,7],
    [2,5,8],
    //diagonal
    [0,4,8],
    [2,4,6]
];

//added event listener to restart button to allow user to click
    restartBtn.addEventListener('click', restart)
        
    function restart () {
        boxes.forEach(box=>{
            box.innerText=''
            currentPlayer=xText
            spaces=Array(9).fill('')
        })
         }     
         
        }

startGame()



    



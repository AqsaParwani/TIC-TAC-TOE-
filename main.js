console.log(" Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let AudioTurn = new Audio("music.mp3")
let gameover = new Audio("music.mp3")
let turn = "X"

// Function to change the turn
const changeTurn = ()=>{
    return turn ==="X"?"0":"X"

}
// Function to check  for a win
const checkwin =  ()=>{
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach[e =>{
                }]

}

// Game logic 
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(Element =>{
    let boxtext =  Element.querySelector('.boxtext');
    Element.addEventListener('click',()=>{
       if(boxtext.innerText === ''){
        e.innerText = "X";
         turn = Changeturn()
        AudioTurn.play()
        checkwin();
        document.getElementsByClassName("turn")[0].innerText =  "turn for " + turn;
       }
    })
})
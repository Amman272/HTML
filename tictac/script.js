let cell=document.querySelectorAll(".cell");
let reset=document.querySelector("#reset");
let turn=document.querySelector("#turn");
let winner=document.querySelector("#winner");
let turn0=true;

const winpattern=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
for(let i=0;i<cell.length;i++){
    cell[i].addEventListener("click",function(){
        console.log(`clicked ${[i]}`);
      if(turn0===true){
        
        cell[i].innerText="X";
        turn0=false;
        turn.innerText = "O's turn";
      }
      else
      {
      
        cell[i].innerText="O";
        turn0=true;
        turn.innerText = "X's turn";
      }
      cell[i].disabled=true;
      checkwin();
    })
}
// reset
reset.addEventListener("click", function(){
    for(let i=0;i<cell.length;i++){
    cell[i].innerText="";
    cell[i].disabled=false;
    turn0=true;
    winner.innerHTML="";
    turn.innerText = "X's turn";
    }
})
function disable(){
    for(let i=0;i<cell.length;i++){
        
        cell[i].disabled=true;
    }
}
function checkwin(){
    for (pattern of winpattern){
        let val1=cell[pattern[0]].innerText;
        let val2=cell[pattern[1]].innerText;
        let val3=cell[pattern[2]].innerText;
        console.log(val1,val2,val3)
        if(val1!='' && val2!='' && val3!='' ){
            if(val1===val3&&val2===val1){
            console.log("winner");
            showwinner(val1);
              
             
            }
        }
    }
} 
function showwinner(val){
    disable();
    winner.innerHTML=`${val} won the game`
}


document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', () => {
        cell.classList.toggle('clicked'); // Toggles the "clicked" state
    });
});

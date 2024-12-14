let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newgame = document.querySelector(".newgame")
let msgContainer = document.querySelector(".msg-container ")
let msg = document.querySelector("#message")

let chanceO=true;
let count =0;

const winningpattern= [
    [0,1,2],
    [0,3,6,],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) =>{
    box.addEventListener("click", () => {
        if(chanceO)
        {
            box.innerText="O"
            box.style.color="red"
            chanceO= false
        }
        else{
            box.innerText="X"
             box.style.color="green"
            chanceO=true
        }
        box.disabled= true;
        count++;
        checkwinner();
        let whoIsWinner = checkwinner();

        if (count === 9 && !whoIsWinner) {
          gameDraw();
        }
      });
    });


const gameDraw = () =>
        {
            msg.innerText = `Game was a Draw.`;
            msgContainer.classList.remove("hide");
          disabled();
        }
const resetGame = () =>
{
    chanceO=true;
    count=0;
    enabled();
    msgContainer.classList.add("hide");  
}




const disabled = () =>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

const enabled = () =>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner = (winner) =>
{
    msg.innerText=`Congratulations, Player ${winner} wins`
    msgContainer.classList.remove("hide");
    disabled();
    
}

const checkwinner = () =>{
    for( let pattern of winningpattern)
    {
        let pos1value= boxes[pattern[0]].innerText;
        let pos2value= boxes[pattern[1]].innerText;
        let pos3value= boxes[pattern[2]].innerText;
       

        if(pos1value != "" && pos2value != "" && pos3value!= ""){
            if(pos1value === pos2value && pos2value === pos3value)
            {
                showWinner(pos1value);
            }
        }
    
    }
};



newgame.addEventListener("click" ,resetGame)
resetbtn.addEventListener("click" ,resetGame)


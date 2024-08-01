var isPlayer1 = true;
var isNoWinner = true;
var player1 = "X";
var player2 = "O";



function placeObject(button){
    var space = [document.getElementById("space1"),document.getElementById("space2"),document.getElementById("space3"),document.getElementById("space4"),document.getElementById("space5"),document.getElementById("space6"),document.getElementById("space7"),document.getElementById("space8"),document.getElementById("space9")];
    
    if(isNoWinner){
        if(button.innerText == ""){
            if(isPlayer1){
                button.innerText = player1;
                isPlayer1 = false;
            }
            else{
                button.innerText = player2;
                isPlayer1 = true;
            }
        }
        else{
    
            for(let i = 1; i < 5; i++){
                var red = "background-color: red;";
                var white = "background-color: white";
    
                if(i % 2 > 0){
                    setTimeout(function(){
                        button.style.cssText = red;
                    },i*100)
                }
                else{
                    setTimeout(function(){
                        button.style.cssText = white;
                    },i*100)
                }
            }
        }
    }
    
    //check rows for wins
    for (i = 0; i <= 6; i+=3) {
        if(space[i].innerText === "X" && space[i+1].innerText === "X" && space[i+2].innerText === "X"){
            space[i].style.cssText = "background-color: lime";
            space[i+1].style.cssText = "background-color: lime";
            space[i+2].style.cssText = "background-color: lime";
            isNoWinner = false;
        }
        else if(space[i].innerText === "O" && space[i+1].innerText === "O" && space[i+2].innerText === "O"){
            space[i].style.cssText = "background-color: lime";
            space[i+1].style.cssText = "background-color: lime";
            space[i+2].style.cssText = "background-color: lime";
            isNoWinner = false;
        }
    }

    //check columns for wins
    for(i=0; i <= 2; i++){
        if(space[i].innerText === "X" && space[i+3].innerText === "X" && space[i+6].innerText === "X"){
            space[i].style.cssText = "background-color: lime";
            space[i+3].style.cssText = "background-color: lime";
            space[i+6].style.cssText = "background-color: lime";
            isNoWinner = false;
        }
        else if(space[i].innerText === "O" && space[i+3].innerText === "O" && space[i+6].innerText === "O"){
            space[i].style.cssText = "background-color: lime";
            space[i+3].style.cssText = "background-color: lime";
            space[i+6].style.cssText = "background-color: lime";
            isNoWinner = false;
        }
    }

    if(space[0].innerText === "X" && space[8].innerText === "X" && space[4].innerText === "X"){
        space[0].style.cssText = "background-color: lime";
        space[8].style.cssText = "background-color: lime";
        space[4].style.cssText = "background-color: lime";
        isNoWinner = false;
    }
    else if(space[2].innerText === "X" && space[6].innerText === "X" && space[4].innerText === "X"){
        space[2].style.cssText = "background-color: lime";
        space[6].style.cssText = "background-color: lime";
        space[4].style.cssText = "background-color: lime";
        isNoWinner = false;
    }
    else if(space[0].innerText === "O" && space[8].innerText === "O" && space[4].innerText === "O"){
        space[0].style.cssText = "background-color: lime";
        space[8].style.cssText = "background-color: lime";
        space[4].style.cssText = "background-color: lime";
        isNoWinner = false;
    }
    else if(space[2].innerText === "O" && space[6].innerText === "O" && space[4].innerText === "O"){
        space[2].style.cssText = "background-color: lime";
        space[6].style.cssText = "background-color: lime";
        space[4].style.cssText = "background-color: lime";
        isNoWinner = false;
    }
    
    
    
}

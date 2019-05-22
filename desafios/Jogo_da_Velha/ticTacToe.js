const play1 = 'X';
const play2 = 'O';
var turn = "p1";
var matriz = [[0,0,0] , [0,0,0] , [0,0,0]];


function jogada(n1 , n2){
    n1--;
    n2--;
    
    if(fimDeJogo() === -1){
        if(turn === "p1"){
            matriz[n2][n1] = 1;
            marcarPos(n2 , n1 , "p1");
            turn = "p2";
        }else{
            matriz[n2][n1] = 2;
            marcarPos(n2 , n1 , "p2");
            turn = "p1";
        }
        if(fimDeJogo() === 1){
            alert("Player 1: X GANHOU");
        }else if(fimDeJogo() === 2){
            alert("Player 1: O GANHOU");
        }else if(fimDeJogo() === 0){
            alert("O jogo deu EMPATE");
        }
    }
    
    

}

function marcarPos(linhas , colunas , str){
    var pos = 1;
    var i = 0;
    var j = 0;
    
    while(i<linhas){
        i++;
        pos += 3;
    }
    while(j<colunas){
        j++;
        pos++;
    }
    
    var jogador;
    if(str === "p1"){
        jogador = "X";
    }else{
        jogador = "O";
    }
    
    var doc;
    if(pos === 1){
        if(jogador === "X"){
            doc = document.getElementById("1");
            doc.classList.add("x");
            doc.innerHTML = jogador;
        }else{
            doc = document.getElementById("1");
            doc.classList.add("o");
            doc.innerHTML = jogador;
        }
        
    }else if(pos === 2){
        if(jogador === "X"){
            doc = document.getElementById("2");
            doc.classList.add("x");
            doc.innerHTML = jogador;
        }else{
            doc = document.getElementById("2");
            doc.classList.add("o");
            doc.innerHTML = jogador;
        }
    }else if(pos === 3){
        if(jogador === "X"){
            doc = document.getElementById("3");
            doc.classList.add("x");
            doc.innerHTML = jogador;
        }else{
            doc = document.getElementById("3");
            doc.classList.add("o");
            doc.innerHTML = jogador;
        }
    }else if(pos === 4){
        if(jogador === "X"){
            doc = document.getElementById("4");
            doc.classList.add("x");
            doc.innerHTML = jogador;
        }else{
            doc = document.getElementById("4");
            doc.classList.add("o");
            doc.innerHTML = jogador;
        }
    }else if(pos === 5){
        if(jogador === "X"){
            doc = document.getElementById("5");
            doc.classList.add("x");
            doc.innerHTML = jogador;
        }else{
            doc = document.getElementById("5");
            doc.classList.add("o");
            doc.innerHTML = jogador;
        }
    }else if(pos === 6){
        if(jogador === "X"){
            doc = document.getElementById("6");
            doc.classList.add("x");
            doc.innerHTML = jogador;
        }else{
            doc = document.getElementById("6");
            doc.classList.add("o");
            doc.innerHTML = jogador;
        }
    }else if(pos === 7){
        if(jogador === "X"){
            doc = document.getElementById("7");
            doc.classList.add("x");
            doc.innerHTML = jogador;
        }else{
            doc = document.getElementById("7");
            doc.classList.add("o");
            doc.innerHTML = jogador;
        }
    }else if(pos === 8){
        if(jogador === "X"){
            doc = document.getElementById("8");
            doc.classList.add("x");
            doc.innerHTML = jogador;
        }else{
            doc = document.getElementById("8");
            doc.classList.add("o");
            doc.innerHTML = jogador;
        }
    }else if(pos === 9){
        if(jogador === "X"){
            doc = document.getElementById("9");
            doc.classList.add("x");
            doc.innerHTML = jogador;
        }else{
            doc = document.getElementById("9");
            doc.classList.add("o");
            doc.innerHTML = jogador;
        }
    }   
    
}

function fimDeJogo(){
    var i = 0;
    var resp = -1;

    while(i<3){
        if(matriz[i][0] === matriz[i][1] && matriz[i][1] === matriz[i][2]){
            if(matriz[i][0] === 1){
                resp = 1;
            }else if(matriz[i][0] === 2){
                resp = 2;
            }
        }else if(matriz[0][i] === matriz[1][i] && matriz[1][i] === matriz[2][i]){
            if(matriz[0][i] === 1){
                resp = 1;
            }else if(matriz[0][i] === 2){
                resp = 2;
            }
        }else if(i===0){
            if(matriz[0][0] === matriz[1][1] && matriz[1][1] === matriz[2][2]){
                if(matriz[0][0] === 1){
                    resp = 1;
                }else if(matriz[0][0] === 2){
                    resp = 2;
                }
            }else if(matriz[0][2] === matriz[1][1] && matriz[1][1] === matriz[2][0]){
                if(matriz[0][2] === 1){
                    resp = 1;
                }else if(matriz[0][2] === 2){
                    resp = 2;
                }
            }
        }

        i++;
    }

    if(matrizCompleta()){
        resp=0;
    }

    return resp;
}

function matrizCompleta(){
    var i=0;
    var j = 0;
    var resp = true;
    while(resp===true && i<3){

        j=0;
        while(j<3){

            if(matriz[i][j] === 0){
                resp=false;
            }

            j++;
        }

        i++;
    }
    
    return resp;
}

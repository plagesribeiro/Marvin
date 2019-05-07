const resultado = document.getElementById("resultado");

function pedra(){
    var num = Math.floor(Math.random() * 3);
    var array = ["pedra" , "papel" , "tesoura"];
    var compChoice = array[num];
    
    if(compChoice == "pedra"){
        resultado.innerHTML = "O computador escolheu pedra. Empate";
    }else if(compChoice == "papel"){
      resultado.innerHTML = "O computador escolheu papel. Voce perdeu!";
    }else{
        resultado.innerHTML = "O computador escolheu tesoura. Voce ganhou!";
    }
}

function papel(){
    var num = Math.floor(Math.random() * 3);
    var array = ["pedra" , "papel" , "tesoura"];
    var compChoice = array[num];
    
    if(compChoice == "pedra"){
        resultado.innerHTML = "O computador escolheu pedra. Voce ganhou!";
    }else if(compChoice == "papel"){
      resultado.innerHTML = "O computador escolheu papel. Empate";
    }else{
        resultado.innerHTML = "O computador escolheu tesoura. Voce perdeu!";
    }
}

function tesoura(){
    var num = Math.floor(Math.random() * 3);
    var array = ["pedra" , "papel" , "tesoura"];
    var compChoice = array[num];
    
    if(compChoice == "pedra"){
        resultado.innerHTML = "O computador escolheu pedra. Voce perdeu!";
    }else if(compChoice == "papel"){
      resultado.innerHTML = "O computador escolheu papel. Voce ganhou!";
    }else{
        resultado.innerHTML = "O computador escolheu tesoura. Empate";
    }
}
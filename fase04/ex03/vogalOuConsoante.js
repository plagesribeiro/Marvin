function vogalOuConsoante(letra){
    var resp = "Consoante";
    letra = letra.toLowerCase();
    
    if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
        resp = "Vogal";
    }   
    
    return resp;
}
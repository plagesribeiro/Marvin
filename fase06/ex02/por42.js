function por42(inicio , fim){
    var c = 0;
    
    while(inicio<=fim){
        if(inicio%42 === 0){
            c++;
            if(c === 2){
                return inicio;
            }
        }
        
        inicio++;
    }
    
    console.log("Não encontrado");
    return false;
}
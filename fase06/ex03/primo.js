function primo(num){
    var i=2;
    var resp = "Sim";
    
    while(i<num){
        if(num%i === 0){
            resp = "Não";
            i = num;
        }
        i++;
    }
    
    return resp;
}
function primo(num){
    var i=2;
    var resp = "Sim";
    
    if(num===0 || num===1){
        resp = "Não";
    }else{
        while(i<num){
            if(num%i === 0){
                resp = "Não";
                i = num;
            }
            i++;
        }
    }    
    
    return resp;
}

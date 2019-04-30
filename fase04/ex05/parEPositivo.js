function parEPositivo(num){
    var resp = "Não";
    
    if(num%2===0 && num>=0){
        resp = "Sim"
    }
    
    return resp;
}
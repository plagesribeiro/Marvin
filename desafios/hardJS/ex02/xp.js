function xp(num){    
    num = Math.round(num);
    var resp = 1;
    var somador = 100;
    var aux = somador;
    
    
    if(num<=0){
        resp = "Voce eh NOOB broo";
    }else{
        
        while(aux<num){
            resp++;
            somador += 50;
            aux += somador;
        }
    }
    
    return resp;
}
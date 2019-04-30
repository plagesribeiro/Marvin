function passadoOuFuturo(d1){
    var d2 = new Date(2015 , 10 , 21).setHours(0,0,0,0);
    var resp = "Passado";
    
    if(d1 >= d2){
        resp = "Futuro";
    }
    
    return resp;
}

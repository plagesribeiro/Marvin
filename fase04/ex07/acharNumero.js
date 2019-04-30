function acharNumero(num){
    var resp;
    if(num<5){
        resp = "a";
    }else if(num<=10){
        resp = "b";
    }else if(num<=100){
        resp = "c";
    }else{
        resp = "d";
    }
    
    return resp;
}
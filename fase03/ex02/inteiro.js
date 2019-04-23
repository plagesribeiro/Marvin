function inteiro(num) {
    var resp = true;
    
    if(num-Math.round(num) !== 0){
        resp = false;
    }
    
    return resp;
}
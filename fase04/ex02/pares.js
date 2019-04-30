function pares(num){
    var str = num.toString();
    
    var n1 = parseInt(str.charAt(0));
    var n2 = parseInt(str.charAt(1));
    
    var resp = false;
    if(n1%2===0 && n2%2===0){
        resp = true;
    }
    
    return resp;
}
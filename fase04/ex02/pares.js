function pares(n1 , n2){    
    var resp = "Os números não são pares";
    if((n1%2===0) && (n2%2===0)){
        resp = "Os números são pares";
    }
    
    return resp;
}
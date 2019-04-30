function nove(num){
    var resp = false;
        
    var str = num.toString();
    str = str.charAt(str.length-1);
    
    if(str == 9){
        resp = true;
    }
    
    return resp;
}
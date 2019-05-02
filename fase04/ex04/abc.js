function abc(str){
    str = str.charAt(0);
    str = str.toLowerCase();
    
    var resp = false;
    
    if(str == "a" || str == "b" || str == "c"){
        resp = true;
    }
    return resp;
}
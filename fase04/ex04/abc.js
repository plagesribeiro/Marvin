function abc(str){
    str = str.charAt(0);
    str = str.toLowerCase();
    
    var resp = true;
    
    if(str == "a" || str == "b" || str == "c"){
        resp = false;
    }
    return resp;
}
function alfabetoMilitar(vogal){
    vogal = vogal.toLowerCase();
    var resp;
    
    if(vogal == "a"){
        resp = "alpha";
    }else if(vogal == "e"){
        resp = "echo";
    }else if(vogal == "i"){
        resp = "india";
    }else if(vogal == "o"){
        resp = "oscar";
    }else if(vogal == "u"){
        resp = "uniform";
    }else{
        return false;
    }
    
    return resp;    
}
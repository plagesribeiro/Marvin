function conversor(temp , escalaAtual , escalaDesejada){
    var resp;
    
    if(escalaAtual === "celsius"){
        if(escalaDesejada === "fahrenheit"){
            resp = Math.ceil((1.8*temp)+32);
        }else if(escalaDesejada === "kelvin"){
            resp = math.ceil(temp + 273.15);
        }
        
        
    }else if(escalaAtual === "fahrenheit"){
        if(escalaDesejada === "celsius"){
            resp = Math.ceil((temp-32)/1.8);
        }else if(escalaDesejada === "kelvin"){
            resp = Math.ceil(((temp+459.67)/1.8));
        }
        
        
    }else if(escalaAtual === "kelvin"){
        if(escalaDesejada === "celsius"){
            resp = temp - 273.15;
        }else if(escalaDesejada === "fahrenheit"){
            resp = Math.ceil((temp*1.8)-459.67);
        }
    }
    
    return resp;
}
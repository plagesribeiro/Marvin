function xp(num){    
    num = Math.round(num);
     
    var resp = "Voce eh NOOB broo";
    
    if(num>0 && num<100){
        resp = 1;
    }else if(num>=100 && num<250){
        resp = 2;
    }else if(num>=250 && num<450){
        resp = 3;
    }else if(num>=450 && num<700){
        resp = 4;
    }else if(num>=700){
        resp = 5;
    }
    
    return resp;
}
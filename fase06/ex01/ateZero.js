function ateZero(num){
    var array = [];
    
    if(num>=0){
        while(num>=0){
            array[num-1] = num;
            num--;
        }
    }else{
        var cont = 0;
        while(num <= 0){
            array[cont] = num;
            num++;
            cont++;
        }
    }
    
    return array;
}

function booleanos(array){
    var num = 0;
    var c = 0;
    var resp = [];
    
    while(num < array.length){
        if(array[num] !== true && array[num] !== false){
            resp[c] = array[num];
            c++;
        }
        
        num++;
    }
    
    return resp;
}
function somaPares(inicio , fim){
    var num = Math.ceil(inicio);
    var soma = 0;
    
    while(num <= fim){
        if(num%2 === 0){
            soma += num;
        }
        
        num++;
    }
    
    return soma;
}
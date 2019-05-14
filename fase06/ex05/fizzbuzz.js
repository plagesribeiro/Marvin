function fizzbuzz(inicio , fim){
    var num = Math.floor(inicio);
    
    while(num <= fim){
        if(num %3 === 0 && num %5 === 0){
            console.log(num + " FizzBuzz");
        }else if(num %3 === 0){
            console.log(num + " Fizz");
        }else if(num %5 === 0){
            console.log(num + " Buzz");
        }else{
            console.log(num);
        }
        
        num++;
    }
}

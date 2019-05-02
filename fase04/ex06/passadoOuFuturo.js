function passadoOuFuturo(date){
    var teste = date.toString();
    var str = teste.substring(0 , teste.length-3);

    if(1445385600 < parseInt(str)){ 
        return "Futuro";
    }else{
        return"Passado";
    }
}

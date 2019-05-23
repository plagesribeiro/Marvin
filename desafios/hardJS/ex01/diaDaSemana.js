function diaDaSemana(str){    
    var semana = new Array(7);
    semana[0] =  "Domingo";
    semana[1] = "Segunda-feira";
    semana[2] = "Terça-feira";
    semana[3] = "Quarta-feira";
    semana[4] = "Quinta-feira";
    semana[5] = "Sexta-feira";
    semana[6] = "Sábado";
    
    var dia = parseInt(str.substring(0,2));
    var mes = parseInt(str.substring(3,5));
    var ano = parseInt(str.substring(6,10));
    
    var date = new Date(ano, mes-1, dia);
    
    return semana[date.getDay()];
}

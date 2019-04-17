function maiusculo(palavra){
    var primeiraParte = palavra.substring(0 , 3);
    var segundaParte = palavra.substring(3 , palavra.len);
    
    primeiraParte = primeiraParte.toUpperCase();
    
    var resp = primeiraParte.concat(segundaParte);
    return resp;
}
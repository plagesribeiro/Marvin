function penultimo(palavra){
    var len = palavra.length;
    var char = len-2;
    return palavra.substring(char, char+1);
}
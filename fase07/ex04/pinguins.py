def pinguins(lista):
    roupa = {'cabeca':'oculos de sol' , 'camisa':'jaqueta polar' , 'pes':'tenis'};
    
    i = 0;
    
    while (i<len(lista)):
        lista[i]['roupa'] = roupa;
        i=i+1;
    
    return lista;

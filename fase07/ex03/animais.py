def animais(lista):
    i = 0;
    idade = 5;
    
    while (i<len(lista)):
        del lista[i]['altura'];
        lista[i]['idade'] = idade;
        idade = idade+1;
        i=i+1;
    
    return lista;

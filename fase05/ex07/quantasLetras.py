def quantasLetras(lista):
    i=0;
    soma=0;
    
    while(i<len(lista)):
        soma = soma + len(lista[i])
        i = i+1;
        
    return soma;
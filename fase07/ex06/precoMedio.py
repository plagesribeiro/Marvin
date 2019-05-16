def precoMedio(*lista):    
    i=0;
    soma=0;
    maiorPreco=lista[0];
    
    while (i<len(lista)):
        if(i!=0):
            if(maiorPreco['preco'] < lista[i]['preco']):
                maiorPreco = lista[i];
        
        soma = soma + lista[i]['preco'];
        i=i+1;
    
    media = soma/len(lista);
    
    print("O produto mais caro se chama "+"maiorPreco['nome']")
    return media;

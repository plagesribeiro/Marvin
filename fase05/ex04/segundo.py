def segundo(lista):
    i=0;
    cont=0;
    resp = [];

    while(i<len(lista)):
        if(cont == 1):
            resp.append("Marvin");
            cont = cont+1;
        else:
            resp.append(lista[i]);
            i = i+1;
            cont = cont+1;

    return resp;

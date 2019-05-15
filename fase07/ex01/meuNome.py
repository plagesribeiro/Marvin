def meuNome(dic):
    parte1 = dic['nome'][:1];
    parte2 = dic['nome'][1:];
    
    return parte1.upper()+parte2.lower();
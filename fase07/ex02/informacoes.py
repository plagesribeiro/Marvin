def informacoes(obj , prop):
    resp = False;
    
    if prop in obj:
        resp = obj[prop];
    
    return resp;
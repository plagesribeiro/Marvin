def organizarDatas(lista):    
    from datetime import datetime;
    i = 0;
    
    sortedList = sorted(lista , key = lambda x: datetime.strptime(x['dataDeChegada'], "%m/%d/%Y"));
    
    return sortedList;

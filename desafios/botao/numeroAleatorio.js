function numeroAleatorio(){
    var doc =  document.getElementById("container");
    var num = Math.round(Math.random() * (10-0) + 0);
    
    doc.innerHTML = num;
    
}
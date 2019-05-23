function pessoaFisica(cpf){
    var resp = false;
    if(cpf.length === 14 && cpf.charAt(3) === "." && cpf.charAt(7) === "." && cpf.charAt(11) === "-"){
        resp = true;
    }
    return resp;
}
function binaryToString(input) {
  let bytesLeft = input;
  let result = '';

  // Check if we have some bytes left
  while (bytesLeft.length) {
    // Get the first digits
    const byte = bytesLeft.substr(0, 8);
    bytesLeft = bytesLeft.substr(8);

    result += String.fromCharCode(parseInt(byte, 2));
  }

  return result;
}

function binario(text) {
    var resp;
    
    var ehBinario = 1;
    var i=0;
    while(i<text.length){
        if(text.charAt(i) != "1" && text.charAt(i) != "0"){
            ehBinario = 0;
            i = text.length;
        }
        i++;
    }
    if(ehBinario === 0){
        var bin = text.charCodeAt().toString(2);
        resp = Array(8-bin.length+1).join("0") + bin;
    }else {
        resp = binaryToString(text);
    }
  
  return resp;
}

function cifraComCifraDeCesar(deslocamento, mensagem)
{
 var mensagemEncriptada = "";

 for (let letra of mensagem){

    if (deslocamento > 26){
        deslocamento = 26;
    }
    var letraNumber = letra.charCodeAt() + deslocamento;

    if (letraNumber >= 90){
        letraNumber = letraNumber - 26;
    }

    mensagemEncriptada +=  String.fromCharCode(letraNumber)
 }

 return mensagemEncriptada;
}

console.log(cifraComCifraDeCesar(1, "FELIPEZ"))

function decifraCifraDeCesar( deslocamento, mensagemCifrada )
{
 var mensagemDecifrada = "";

 for (let letra of mensagemCifrada){

    if (deslocamento > 26){
        deslocamento = 26;
    }
    var letraNumber = letra.charCodeAt() - deslocamento;

    if (letraNumber < 65){
        letraNumber = letraNumber + 26;
    }

    mensagemDecifrada +=  String.fromCharCode(letraNumber);
 }

 

 return mensagemDecifrada;
}

console.log(decifraCifraDeCesar(1, "GFMJQFA"))

//String.fromCharCode()//
// adicionando avento de click para o botão de criptografar mensagem
function criptografar(){
 
    var textoInserido = document.querySelector('#insert-textarea');

    if (textoInserido.value != "") {
        var textoCriptografado = textoInserido.value.replace(/e/g, "enter");
        textoCriptografado = textoCriptografado.replace(/i/g, "imes");
        textoCriptografado = textoCriptografado.replace(/a/g, "ai");
        textoCriptografado = textoCriptografado.replace(/o/g, "ober");
        textoCriptografado = textoCriptografado.replace(/u/g, "ufat");

        document.querySelector('#resposta-textarea').value = textoCriptografado;
        document.querySelector('#btn-copiar').disabled = false;
        textoInserido.value = "";
    }

}

// adicionando avento de click para o botão de descriptografar mensagem

function descriptografar(){

    var textoInserido = document.querySelector('#insert-textarea');
    
    if (textoInserido.value != "") {

        var textoCriptografado = textoInserido.value.replace(/enter/g, "e");
        textoCriptografado = textoCriptografado.replace(/imes/g, "i");
        textoCriptografado = textoCriptografado.replace(/ai/g, "a");
        textoCriptografado = textoCriptografado.replace(/ober/g, "o");
        textoCriptografado = textoCriptografado.replace(/ufat/g, "u");

      
        document.querySelector('#resposta-textarea').value = textoCriptografado;
        document.querySelector('#btn-copiar').disabled = false;
        textoInserido.value = "";
    }

}
// adicionando avento de click para o botão de copiar mensagem
function CopiaTexto(){
    document.querySelector("#resposta-textarea").disabled = false;
    document.querySelector("#resposta-textarea").select();
    document.execCommand("cut");
    alert("O texto foi copiado para a sua área de transferência!");
}


// Fonte de Conulta:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace





























































/**************************Função copiar******************************************************************/

// iniciando lógicas para o projeto

// adicionando avento de click para o botão de criptografar mensagem
/*
document.querySelector('#btn-criptografar').addEventListener('click', () => {

    var textoInserido = document.querySelector('#insert-textarea');

    if (textoInserido.value != "") {
        var textoCriptografado = textoInserido.value.replace(/e/g, "enter");
        textoCriptografado = textoCriptografado.replace(/i/g, "imes");
        textoCriptografado = textoCriptografado.replace(/a/g, "ai");
        textoCriptografado = textoCriptografado.replace(/o/g, "ober");
        textoCriptografado = textoCriptografado.replace(/u/g, "ufat");

        document.querySelector('#img-procurando').style.display = "none";
        document.querySelector('#resposta-textarea').value = textoCriptografado;
        document.querySelector('#btn-copiar').disabled = false;
        textoInserido.value = "";
    }
});

// adicionando avento de click para o botão de descriptografar mensagem
document.querySelector('#btn-descriptografar').addEventListener('click', () => {

    var textoInserido = document.querySelector('#inserir-textarea');

    if (textoInserido.value != "") {
        var textoCriptografado = textoInserido.value.replace(/enter/g, "e");
        textoCriptografado = textoCriptografado.replace(/imes/g, "i");
        textoCriptografado = textoCriptografado.replace(/ai/g, "a");
        textoCriptografado = textoCriptografado.replace(/ober/g, "o");
        textoCriptografado = textoCriptografado.replace(/ufat/g, "u");

       // document.querySelector('#img-procurando').style.display = "none";
        document.querySelector('#resposta-textarea').value = textoCriptografado;
      //  document.querySelector('#btn-copiar').disabled = false;
        textoInserido.value = "";
    }
});

// adicionando avento de click para o botão de copiar mensagem
document.querySelector('#btn-copiar').addEventListener('click', () => {

    document.querySelector("#resposta-textarea").disabled = false;
    document.querySelector("#resposta-textarea").select();
    document.execCommand("cut");
   // document.querySelector('#img-procurando').style.display = "block";
   // document.querySelector('#btn-copiar').disabled = true;
   // document.querySelector("#resposta-textarea").disabled = true;
    alert("O texto foi copiado para a sua área de transferência!");
});
*/





/*function copyText(){
  let textoCopiado = document.getElementById("texto");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0,99999);
  document.execCommand("copy");
  alert("O texto é: " + textoCopiado.value);
}
 

*/


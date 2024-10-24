//let titulo = document.querySelector('h1');
//titulo.innerHTML ='jogo do número secreto'; // quando vai inserir um texto sempre colocar em aspas

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML ='escolha um número entre 1 e 10';

let gerarNumeroAleatorio();

function exibirTextoNatela(teg, texto) {
 let campo = document.querySelector(tag);
 campo.innerHTML = texto;
}

exibirTextoNatela('h1','jogo do número secreto' );
exibirTextoNaTela('p', 'escolha um número ente 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'acertou!');
    exibirTextoNatela ('p', 'você descobriu o número secreto!');
    }else {
     if(chute > numeroSecreto)
      exibirTextoNaTela('p', 'O número secreto é menor');
     }else{
       exibirTextoNaTela('P','O número secreto é maior');
     }
   }  
}

//quando utiliza == é para comparar um valor
// qano utiliza = é para atribuir um valor

function gerarNumeroAleatorio() {
   return parseInt (Math.random()* 10 + 1);
}

// false em javaScript significa que ele é booean pu seja verdadeiro ou falso 

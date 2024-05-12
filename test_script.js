function paginaUno(){
    alert("sei nella prima pagina")
}

function attenzione(){
alert("ATTENZIONE");
}

//Generazione di numeri

function GeneraNumeroCasuale(){
  return Math.floor(Math.random() *100) +1;
}

var numero = GeneraNumeroCasuale();


document.getElementById("numero").textContent = numero;


var lista = [""];
lista.push("numero");


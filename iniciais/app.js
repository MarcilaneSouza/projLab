//Perguntar o nome e sobrenome
var name = prompt("Qual o seu nome e sobrenome?");

//pegar a primera letra do primeiro nome
var firstInitial = name.slice(0,1);

//pegar a posição da primeira letra do sobrenome
var secondInitialPosition = name.indexOf(" ") + 1;

//pegar a primeira letra do segundo nome
var secondInitial = name.slice(secondInitialPosition, secondInitialPosition + 1);

document.write("Suas iniciais são: " + firstInitial.toUpperCase() + secondInitial.toUpperCase());
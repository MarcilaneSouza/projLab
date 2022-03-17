//Perguntar as entradas
var income = prompt("Qual é o valor da entrada");

//saídas
var costs = prompt("Qual é o valor da saída");

//porcentagem dos impostos
var taxPercent = prompt("Qual a porcentagem dos impostos?");

//renda bruta
var grossProfit = income - costs;

//obtendo o valor dos impostos
var tax = grossProfit*taxPercent/100

//renda líquida
var netIncome = grossProfit - tax;

//mostrar na página web
document.write("Sua renda liquida é de $" + netIncome); 
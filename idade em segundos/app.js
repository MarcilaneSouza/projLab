//Perguntar a idade por meio de um prompt
var age = parseInt(prompt("Qual é a sua idade?"))

//converter a idade em segundos
var ageInSeconds = age*365*24*60*60
console.log(ageInSeconds);

document.write("Em seus "+ age +" anos de idade, se passaram "+ ageInSeconds + " segundos")

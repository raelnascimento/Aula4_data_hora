var data = new Date();

var semana=new Array ("Domingo","Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado");

var d = data.getDay();
var hora=data.getHours();
var cont = 0;
var cont2 = 0;
var conversao = 0;
var somaHora = 0;


while (semana[d + cont] != semana[5]) {
    cont ++;
}

conversao = cont*24;

while (hora+cont2 != 18) {
    cont2++;
}
 
somaHora = conversao + cont2;

document.write("Faltam: " + somaHora + " horas para sexta as 18 horas");
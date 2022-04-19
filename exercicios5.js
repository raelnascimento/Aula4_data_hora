var data = new Date();

var semana=new Array ("Domingo","Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado");

var d = data.getDay();
var cont = 0;

while (semana[d + cont] != semana[6]) {
    cont ++;
}
 
document.write("Data: " + semana[d] + "<br>" ); 
document.write("Faltam: " + cont + " para " + semana[6]);


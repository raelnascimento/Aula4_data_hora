var data = new Date();
var datanatal = new Date("12/25/2022");

var meses=new Array ("Janeiro","Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");

var d = data.getMonth();
var dnatal = data.getDate();
var cont = 0;
var cont2 = 0;


//forma 1
while (meses[d + cont] != meses[11]) {
    cont ++;
}

cont2 = 25 - dnatal;


document.write("Faltam: " + cont2 + " dias e " + cont + " meses para o natal <br>");

//forma 2
var difData = Math.abs(datanatal.getTime() - data.getTime());
var difDias = Math.ceil(difData/(1000*3600*24));

document.write("Faltam: " + difDias + " dias para o Natal <br>");






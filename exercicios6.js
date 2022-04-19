var data = new Date();

var meses=new Array ("Janeiro","Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");

var d = data.getMonth();
var cont = 0;

while (meses[d + cont] != meses[11]) {
    cont ++;
}
 
document.write("Mês: " + meses[d] + "<br>" ); 
document.write("Faltam: " + cont + " meses para " + meses[11]);

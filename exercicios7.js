var data = new Date();


var d = data.getFullYear();
var cont = 0;

while (d + cont != 2030) {
    cont ++;
}
 
document.write("Ano: " + d + "<br>" ); 
document.write("Faltam: " + cont + " para 2030");
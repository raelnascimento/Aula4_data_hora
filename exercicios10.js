var data = new Date();

var d = data.getDate();
var dniver = prompt("Informe o dia do seu aniversario em numero: ")
var cont = 0;


if (dniver >= d) {
    while (d + cont != dniver) {
    cont ++;
    }

    document.write("Dia do aniversario: " + dniver + "<br>" ); 
    document.write("Faltam: " + cont + " dias para seu aniversario ");
}else{
    document.write("Seu aniversario já passou, Parabens atrasado!!!");
}


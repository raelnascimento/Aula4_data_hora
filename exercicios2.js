

var data =new Date();

var hora=data.getHours();
var minutos = data.getMinutes();

var min;

var cont = 0;

// while (hora+cont != 24) {
//     cont++;
// }

cont = 24 - hora;

min = cont*60 + (60 - minutos);


document.write("Fatam: " + min + " min para começar o novo dia");
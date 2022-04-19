var data =new Date();

var hora=data.getHours();

var cont = 0;

// while (hora+cont != 24) {
//     cont++;
// }

cont = 24 - hora;

document.write("Fatam: " + cont + " horas para começar o novo dia");
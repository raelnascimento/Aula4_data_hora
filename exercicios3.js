var data =new Date();

var hora=data.getHours();
var segundos = data.getSeconds();
var seg;

var cont = 0;

while (hora+cont != 24) {
    cont++;
}

seg = cont*3600 + (3600 - segundos);


document.write("Fatam: " + seg + " segundos para começar o novo dia");

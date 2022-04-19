var meses=new Array ("Janeiro","Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");

var semana=new Array ("Domingo","Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado");



var data =new Date();//data e hora do sistema
var dia=data.getDate();//dia de hoje
var mes=data.getMonth(); //mes, porem janeiro = 0 somando +1
var ano=data.getFullYear(); //ano
var hora=data.getHours();//Hora
var min=data.getMinutes();//min
var seg=data.getSeconds();//segundo
var d=data.getDay();//dia da semana começando do 0 domingo

document.write("Data: " + semana[d] + ", " + dia + " de " + meses[mes] + " de " + ano + "<br>");

document.write("Hora: " + hora + ":" + min + ":" + seg + "<br>");


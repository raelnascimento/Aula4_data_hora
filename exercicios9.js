var data = new Date ();

var mes = new Array("Janeiro" , "Fevereiro" , "Março" , "Abril" , "Maio" , "Junho" , "Julho" , "Agosto" , "Setmebro" , "Outubro" , "Novembro" , "Dezembro");

var flag = false;
var mesatual = data.getMonth();
var ani = prompt("Qual o mês do seu aniversário?");

for(var i = 0; i <= 11; i++){
    if(mes[i].toUpperCase() == ani.toUpperCase()){
        flag = true;
        break;
    }
}

if (flag){
    if(mesatual >= i){
    document.write("Seu anivérsario ja passou");
    }else{
    var resul = i - mesatual;
    document.write("Falta(m)" +resul +" mes(es) para o seu anivérsario");
    }
}
else{
    alert("Mês não encontrado, verifique a digitação!!");
}




function tempo() {
    var novaHora = new Date();

    var hora = novaHora.getHours();
    var minuto = novaHora.getMinutes();
    var segundo = novaHora.getSeconds();

    minuto = zero(minuto);
    segundo = zero (segundo);

    document.getElementById("hora").textContent = hora + ":" + minuto + ":" + segundo;

}

function zero(x) {
    if(x>10) {
        x = "0" + x;
    }
    return x;
}

setInterval(tempo, 1000); //chama a função tempo
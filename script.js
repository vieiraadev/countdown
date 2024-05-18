const dataFinal = new Date('November 11, 2024 00:00:00').getTime();
function atualizarContagemRegressiva() {
    const agora = new Date().getTime();
    const diferenca = dataFinal - agora;
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
    document.getElementById('dias').innerText = dias.toString().padStart(2, '0');
    document.getElementById('horas').innerText = horas.toString().padStart(2, '0');
    document.getElementById('minutos').innerText = minutos.toString().padStart(2, '0');
    document.getElementById('segundos').innerText = segundos.toString().padStart(2, '0');
    if (diferenca < 0) {
        clearInterval(intervalo);
        document.getElementById('titulo').innerText = 'A contagem terminou!';
        document.getElementById('contador').innerText = '';
    }
}
const intervalo = setInterval(atualizarContagemRegressiva, 1000);
atualizarContagemRegressiva();

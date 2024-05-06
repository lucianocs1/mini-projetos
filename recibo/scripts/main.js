function gerarRecibo() {
    document.getElementById('recibo_emitente').innerHTML = document.getElementById('emitente').value;
    document.getElementById('recibo_nome').innerHTML = document.getElementById('nome').value;
    document.getElementById('recibo_reference').innerHTML = document.getElementById('reference').value;
    document.getElementById('recibo_valor').innerHTML = parseFloat(document.getElementById('valor').value).toLocaleString('pt-BR', {minimumFractionDigits: 2});
    document.getElementById('recibo_data').innerHTML = dataAtual();
    window.print();
};

function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`;
}

function dataAtual(){
    let data = new Date();
    return `Emitido em ${zeroAEsquerda(data.getDate())}/${zeroAEsquerda(data.getMonth()+1)}/${zeroAEsquerda(data.getFullYear())} ás ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}:${zeroAEsquerda(data.getSeconds())}`;
}
function fn_media(n1, n2, n3) {
    return ((parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) / 3).toFixed(2).toString();
}

function calculaMedia() {
    alert('Digite 3 notas para calcular a média!');
    const n1 = prompt('Digite o valor da nota 1:');
    const n2 = prompt('Digite o valor da nota 2:');
    const n3 = prompt('Digite o valor da nota 3:');
    const media = fn_media(n1, n2, n3);
    confirm('A média das notas é : ' + media);
}

function recebe2Numeros() {
    alert('Digite 2 numneros!');
    const n1 = prompt('Digite o valor A:');
    const n2 = prompt('Digite o valor B:');

    const operacoes = {
        soma: (n1, n2) => {
            return (parseFloat(n1) + parseFloat(n2)).toFixed(2).toString();
        }, subtrai: (n1, n2) => {
            return (parseFloat(n1) - parseFloat(n2)).toFixed(2).toString();
        }, multiplica: (n1, n2) => {
            return (parseFloat(n1) * parseFloat(n2)).toFixed(2).toString();
        }, divide: (n1, n2) => {
            return (parseFloat(n1) / parseFloat(n2)).toFixed(2).toString();
        }, resto: (n1, n2) => {
            return (parseFloat(n1) % parseFloat(n2)).toFixed(2).toString();
        }
    }

    alert('A soma é: '+operacoes.soma(n1,n2));
    alert('A subtração é: '+operacoes.subtrai(n1,n2));
    alert('A multiplicação é: '+operacoes.multiplica(n1,n2));
    alert('A divisão é: '+operacoes.divide(n1,n2));
    alert('A resto da divisão é: '+operacoes.resto(n1,n2));

}
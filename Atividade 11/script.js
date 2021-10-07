function Retangulo(x,y){
    this.Base = x;
    this.Altura = y;
    this.Area = ()=>{
        return Number(this.Base) * Number(this.Altura);
    }
}

function renderRetangulo(){
    const base = Number(document.getElementById('base').value);
    const altura = Number(document.getElementById('altura').value);

    const retangulo = new Retangulo(base,altura);
    document.getElementById('retangulo').style.width = base+'px';
    document.getElementById('retangulo').style.height = altura+'px';
    document.getElementById('resultadoArea').innerText = 'A area é : '+retangulo.Area();
}


function Conta(){
    this.setCorrentista = (correntista)=>{
        this.Correntista = correntista;
    };
    this.setBanco = (banco)=>{
        this.Banco = banco;
    };
    this.setNumeroConta = (numeroConta)=>{
        this.NumeroConta = numeroConta;
    };
    this.setSaldo = (saldo) =>{
        this.Saldo = saldo;
    };
    this.getCorrentista = ()=>{
        return this.Correntista;
    };
    this.getBanco = ()=>{
        return this.Banco;
    };
    this.getNumeroConta = ()=>{
        return this.NumeroConta;
    };
    this.getSaldo = () =>{
        return this.Saldo;
    };
}

function Corrente(){
    this.SaldoEspecial = '';
    this.setSaldoEspecial = (saldoEspecial) =>{
        this.SaldoEspecial = saldoEspecial;
    };
    this.getSaldoEspecial = ()=>{
        return this.SaldoEspecial;
    };
}
Corrente.prototype = new Conta();

function Poupanca(){
    this.Juros = '';
    this.DataVencimento = '';
    this.setJuros = (juros) =>{
        this.Juros = juros;
    };
    this.getJuros = ()=>{
        return this.Juros;
    };
    this.setDataVencimento = (DataVencimento) =>{
        this.DataVencimento = DataVencimento;
    };
    this.getDataVencimento = ()=>{
        return this.DataVencimento;
    };
}

Poupanca.prototype = new Conta();


function mudaForm(selected){
    if(selected == 'c'){
        document.getElementById('cForm').style.display = 'block';
        document.getElementById('pForm').style.display = 'none';
    }else{
        document.getElementById('cForm').style.display = 'none';
        document.getElementById('pForm').style.display = 'block';
    }
}


function salvarConta(){
    const TipoConta = document.getElementsByName('tipoConta')
    let TipoSelecionado = '';
    for (var i = 0; i < TipoConta.length; i++) {
        if (TipoConta[i].checked) {
            TipoSelecionado = TipoConta[i].value;
        }
    }

    const correntista = document.getElementById('correntista').value;
    const banco = document.getElementById('banco').value;
    const numeroConta = document.getElementById('numeroConta').value;
    const saldo = document.getElementById('saldo').value;
    let linha = '';
    if(TipoSelecionado == 'c'){
        const saldoEspecial = document.getElementById('saldoEspecial').value;

        const contaCorrente = new Corrente();
        contaCorrente.setCorrentista(correntista);
        contaCorrente.setBanco(banco);
        contaCorrente.setNumeroConta(numeroConta);
        contaCorrente.setSaldo(saldo);

        contaCorrente.setSaldoEspecial(saldoEspecial);

        linha = `<tr>
                        <td>Corrente</td>
                        <td>${contaCorrente.getCorrentista()}</td>
                        <td>${contaCorrente.getBanco()}</td>
                        <td>${contaCorrente.getNumeroConta()}</td>
                        <td>${contaCorrente.getSaldo()}</td>
                        <td>Saldo Especial : ${contaCorrente.getSaldoEspecial()}</td>
                </tr>`;

    }else{
        const juros = document.getElementById('juros').value;
        const vencimento = document.getElementById('vencimento').value;

        const contaPoupanca = new Poupanca();
        contaPoupanca.setCorrentista(correntista);
        contaPoupanca.setBanco(banco);
        contaPoupanca.setNumeroConta(numeroConta);
        contaPoupanca.setSaldo(saldo);

        contaPoupanca.setJuros(juros);
        contaPoupanca.setDataVencimento(vencimento);
        
        linha = `<tr>
                        <td>Poupança</td>
                        <td>${contaPoupanca.getCorrentista()}</td>
                        <td>${contaPoupanca.getBanco()}</td>
                        <td>${contaPoupanca.getNumeroConta()}</td>
                        <td>${contaPoupanca.getSaldo()}</td>
                        <td>Juros : ${contaPoupanca.getJuros()}
                        <br>Data Vencimento : ${contaPoupanca.getDataVencimento()}</td>
                </tr>`;
    }

    

    document.getElementById('contasCriadas').innerHTML = document.getElementById('contasCriadas').innerHTML+linha;
}

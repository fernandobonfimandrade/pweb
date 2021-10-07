const pessoa1 = new Object();
pessoa1.RA = "0030481923015";
pessoa1.Nome = "Fernando Bonfim Andrade";

const pessoa2 = {};
pessoa2.RA = "0030481923015";
pessoa2.Nome = "Fernando Bonfim Andrade";

const pessoa3 = {
  RA: "0030481923015",
  Nome: "Fernando Bonfim Andrade"
}

const pessoa4 = new Object();
pessoa4['RA'] = "0030481923015";
pessoa4['Nome'] = "Fernando Bonfim Andrade";


function Pessoa(ra, nome){
    this.RA = ra
    this.Nome = nome
}

const pessoa5 = new Pessoa("0030481923015","Fernando Bonfim Andrade");

console.log(pessoa1,pessoa2,pessoa3,pessoa4,pessoa5);
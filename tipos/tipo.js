"use strict";
//string
let nome = 'João';
console.log(nome);
//numbers
let idade = 27;
idade = 27.5;
console.log(idade);
//boolean
let possuiHobbies = true;
//possuiHobbies = 1
console.log(possuiHobbies);
//tipos explicitos
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
//minhaIdade = '27'
console.log(typeof minhaIdade);
//array
let hobbies = ["Cozinhar", "Preticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100];
//hobbies = 100
console.log(hobbies);
//tuplas
let endereco = ["Av. Principal", 99, "Bloco A"];
console.log(endereco);
endereco = ["Rua Importante", 1260, "Bloco C"];
console.log(endereco);
//Enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
// any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
// funções
function retornaMeuNome() {
    //return minhaIdade
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('Oi');
    //return minhaIdade
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(4.7, 9));
//tipo função
let calculo;
//calculo = digaOi
//calculo()
calculo = multiplicar;
console.log(calculo(5, 6));
// Objetos
let usuario = {
    nome: 'João',
    idade: 27
};
console.log(usuario);
//usuario = {}
/*usuario = {
  name: 'Maria',
  age: 31
}*/
usuario = {
    nome: 'Maria',
    idade: 31
};
console.log(usuario);
let funcionario = {
    servidores: ['Ana', 'Fernando'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto Normal';
        }
        else {
            return 'Fora do Horario!';
        }
    }
};
let funcionario2 = {
    servidores: ['Bia', 'Carlos'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto Normal';
        }
        else {
            return 'Fora do Horario!';
        }
    }
};
console.log(funcionario.servidores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
//Union Types
let nota = 10;
console.log(`Minha nota é ${nota}!`);
nota = '10';
console.log(`Minha nota é ${nota}!`);
//nota = true
// Checando Tipos
let valor = true;
if (typeof valor === "number") {
    console.log("É um number!");
}
else {
    console.log(typeof valor);
}
//Tipo Never
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'Sabão',
    preco: 8,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preço invalido!');
        }
    }
};
produto.validarProduto();
//tipo null
let altura = 12;
// altura = null
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
    nome: 'Fulano',
    tel1: '98765432',
    tel2: null
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
let podeSerNulo = null; //any
podeSerNulo = 12;
console.log(podeSerNulo);
podeSerNulo = 'abc';
console.log(podeSerNulo);
let contaBancaria1 = {
    saldo: 3456,
    depositar(valor) {
        return this.saldo += valor;
    }
};
let correntista1 = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria1,
    contatos: ['34567890', '98765432']
};
correntista1.contaBancaria.depositar(3000);
console.log(correntista1);
//# sourceMappingURL=tipo.js.map
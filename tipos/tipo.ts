//string
let nome: string = 'João'
console.log(nome)


//numbers
let idade: number = 27
idade = 27.5

console.log(idade)

//boolean
let possuiHobbies: boolean = true
//possuiHobbies = 1
console.log(possuiHobbies)

//tipos explicitos
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)
//minhaIdade = '27'
console.log(typeof minhaIdade)

//array
let hobbies: any[] = ["Cozinhar", "Preticar Esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100]
//hobbies = 100
console.log(hobbies)


//tuplas
let endereco: [string, number, string] = ["Av. Principal", 99, "Bloco A"]
console.log(endereco)

endereco = ["Rua Importante", 1260, "Bloco C"]
console.log(endereco)

//Enums
enum Cor{
  Cinza, //0
  Verde = 100, //1
  Azul = 10, //2
  Laranja,
  Amarelo,
  Vermelho = 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Amarelo)
console.log(Cor.Verde, Cor.Vermelho)


// any
let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano: 2019 }
console.log(carro)

// funções
function retornaMeuNome(): string{
  //return minhaIdade
  return nome
}

console.log(retornaMeuNome())

function digaOi(): void {
  console.log('Oi')
  //return minhaIdade
}

digaOi()

function multiplicar(numA: number, numB: number): number{
  return numA * numB
}

console.log(multiplicar(4.7, 9))

//tipo função
let calculo: (numeroA: number, numeroB: number) => number
//calculo = digaOi
//calculo()

calculo = multiplicar
console.log(calculo(5, 6))

// Objetos
let usuario: {nome: string, idade: number} = {
    nome: 'João',
    idade: 27
}

console.log(usuario)

//usuario = {}

/*usuario = {
  name: 'Maria',
  age: 31
}*/

usuario = {
  nome: 'Maria',
  idade: 31
}

console.log(usuario)

// desafio :O

/*
  Criar um objeto funcionario com:
    -Array de Strings com os nomes dos supervisores
    -Função de bater ponto que recebe a hora retorna
      Uma string
        -> Ponto normal (<=8)
        -> Fora do horario
*/

//alias
type Funcionario = {
  servidores: string[],
  baterPonto: (horas: number) => string
 }

let funcionario: Funcionario = {
    servidores: ['Ana', 'Fernando'],
    baterPonto(horario: number): string{
      if(horario <= 8){
          return 'Ponto Normal'
      } else {
          return 'Fora do Horario!'
      }
    }
  }

  let funcionario2: Funcionario = {
     servidores: ['Bia', 'Carlos'],
     baterPonto(horario: number): string{
       if(horario <= 8){
           return 'Ponto Normal'
       } else {
           return 'Fora do Horario!'
       }
     }
   }

  console.log(funcionario.servidores)
  console.log(funcionario.baterPonto(8))
  console.log(funcionario.baterPonto(9))

  //Union Types

  let nota: number | string = 10
  console.log(`Minha nota é ${nota}!`)
  nota = '10'
  console.log(`Minha nota é ${nota}!`)
  //nota = true

  // Checando Tipos
  let valor = true

  if(typeof valor === "number"){
    console.log("É um number!")
  }else{
    console.log(typeof valor)
  }

  //Tipo Never
  function falha(msg: string): never {
    throw new Error(msg)
  }

  const produto = {
    nome: 'Sabão',
    preco: 8,
    validarProduto(){
      if(!this.nome || this.nome.trim().length == 0){
          falha('Precisa ter um nome')
      }
      if(this.preco <= 0){
        falha('Preço invalido!')
      }
    }
  }

  produto.validarProduto()

  //tipo null

  let altura = 12
  // altura = null

  let alturaOpcional: null | number = 12
  alturaOpcional = null

  type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
  }

  const contato1: Contato = {
    nome: 'Fulano',
    tel1: '98765432',
    tel2: null
  }

  console.log(contato1.nome)
  console.log(contato1.tel1)
  console.log(contato1.tel2)

  let podeSerNulo = null //any
  podeSerNulo = 12
  console.log(podeSerNulo)
  podeSerNulo = 'abc'
  console.log(podeSerNulo)

//desafio 2
  type ContaBancaria = {
    saldo: number,
    depositar:(valor: number) => number
  }

  type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
  }

  let contaBancaria1: ContaBancaria = {
    saldo: 3456,
    depositar(valor){
      return this.saldo += valor
    }
  }

  let correntista1: Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria1,
    contatos: ['34567890','98765432']
  }

  correntista1.contaBancaria.depositar(3000)
  console.log(correntista1)
//let & const
let seraQuePode = '?' // hoisting
console.log(seraQuePode)

let estaFrio = true
if(estaFrio){
  let acao = 'Colocar o casaco!'
  console.log(acao)
}

const cpf: string = '123.456.000-99'
// cpf = '789.101.132-78'   erro de não poder atribuir um valor a uma constante
console.log(cpf)

var segredo = 'externo!'
function revelar(){
  var segredo = 'interno'
  console.log(segredo)
}
revelar()
console.log(segredo)

{
  {
  const def = 'def'
  console.log(def)
  }
}

for(let i = 0; i < 10; i++){
  console.log(i)
}
// console.log(i)

// Arrow Function
const somar = function(n1: number, n2: number): number {
  return n1 + n2
}// função anonima
console.log(somar(10, 10))

const subtrair = (n1: number, n2: number)/*: number*/ => n1 - n2
console.log(subtrair(12, 20))

const saudacao = () => console.log("Olá!")
saudacao()

const falarCom = (pessoa: string) => console.log('Olá '+ pessoa)
falarCom('João')

//this

//function normalComThis(){
  //console.log(this)
//}

//normalComThis()

//const normalComThisEspecial = normalComThis
        //.bind({nome: 'Abc'})

//normalComThisEspecial()

// this ???
//const arrowComThis = () => console.log(this)
//arrowComThis()

// parametros padrão
function contagemRegressiva(inicio: number = 5,fim: number = inicio - 5): void{
    console.log(inicio)
  while(inicio > fim){
      inicio--
      console.log(inicio)
    }
    console.log("Fim!")
}

contagemRegressiva()
contagemRegressiva(3)
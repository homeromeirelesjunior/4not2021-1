let nota = 7.2
let situacao

/* if (nota >= 6) {
    situacao = 'APROVADO'
} 
else {
    situacao =  'REPROVADO'
}

console.log(situacao) */

/* if (nota >= 6) situacao = 'APROVADO'
else situacao =  'REPROVADO' */

nota = 5.3

// As três partes do operador ternário
// 1º parte: condição (que iria depois do if)
// Entre a 1º e a 2º partes -> ?
// 2º parte: o resultado, caso a condição seja VERDADEIRA
// Entre a 2º e a 3º partes -> :
// 3º parte: o resultado, caso a condição seja FALSA
situacao = nota >= 6 ? 'APROVADO' : 'REPROVADO'

console.log(situacao)

let user = 'zemane'
let userType

userType = user === 'admin' || user === 'root' ? 'SuperUser' : 'OrdinaryUser'

console.log(userType)
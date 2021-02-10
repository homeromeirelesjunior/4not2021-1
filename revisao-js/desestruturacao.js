let array = [10, 20, 30]

let object = {
    name: 'Mary',
    age: 34,
    city: 'Franca/SP'
}

// Desestruturação de vetor: as variáveis do let podem ter qualquer nome
let [x, y, z] = array

console.log(x)
console.log(y)
console.log(z)

// Desestruturaçãoo de objetos: as variáveis do let DEVEM ter os mesmos nomes
// das propriedades, não importa a ordem
let {name, age, city} = object

console.log(name)
console.log(age)
console.log(city)

let car = {
    brand: 'Volkswagen',
    model: 'Fusca',
    year: 1969,
    color: 'black'
}

// Desestruturação parcial de um objeto
let { model, year} = car

console.log(model)
console.log(year)

// Não dá certo: desestruturação parcial de vetor
let fruits = ['orange', 'apple', 'banana']
//let [undefined, second, undefined] = fruits

//console.log(second)

let [fruit1, fruit2] = fruits

// Ignorando o último elemento
console.log(fruit1)
console.log(fruit2)

// Ignorando o primeiro elemento (deixe uma vírgula na posição a ignorar)
let [, fruta2, fruta3] = fruits

console.log(fruta2)
console.log(fruta3)

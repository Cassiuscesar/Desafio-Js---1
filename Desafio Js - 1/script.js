let firstNumber = prompt('digite o primeiro número:')
let secundNumber = prompt('digite o segundo número:')

firstNumber = Number(firstNumber)
secundNumber = Number(secundNumber)

const sum = firstNumber + secundNumber
const sub = firstNumber - secundNumber
const multi = firstNumber * secundNumber
const div = firstNumber / secundNumber
const restDiv = firstNumber % secundNumber

alert('soma:' + sum)
alert('subtração:' + sub)
alert('multiplicação:' + multi)
alert('divisão:' + div)
alert('restoda divição:' + restDiv)

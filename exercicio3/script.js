const numero1 = Number(prompt("Digite um número:"))
const numero2 = Number(prompt("Digite outro número:"))


const soma = (num1,num2) => {
    const verificacao = num1 + num2;
    return `O valor da soma de ${num1} com o ${num2} é ${verificacao}`
}
console.log(soma(numero1,numero2))

const subtracao = (num1,num2) => {
    const verificacao = num1 - num2;
    return `O valor da subtração de ${num1} com o ${num2} é ${verificacao}`
}
console.log(subtracao(numero1,numero2))

const divisao = (num1,num2) => {
    const verificacao = num1 / num2;
    return `O valor da divisão de ${num1} com o ${num2} é ${verificacao}`
}
console.log(divisao(numero1,numero2))

const multiplicacao = (num1,num2) => {
    const verificacao = num1 * num2;
    return `O valor da multiplicação de ${num1} com o ${num2} é ${verificacao}`
}
console.log(multiplicacao(numero1,numero2))
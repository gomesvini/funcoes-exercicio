const conta = (num1,num2) => {
    const soma = num1 + num2;
    return `A soma do primeiro número com o segundo é de ${soma}`
}
console.log(conta(6,10))

const comparacao = (num1,num2) => {
    const verificacao = num1 > num2;
    return `O primeiro número é maior que o segundo? ${verificacao}`
}
console.log(comparacao(2,4))

const par = (num) => {
    const verificacao = num % 2 === 0;
    return `O número ${num} é par? ${verificacao}`
}
console.log(par(2))


const salary= (value) => {
    const inss = value * 0.1;
    const finalSalary = value - inss;
    return `O Salário de ${value} com desconto do Inss é de ${finalSalary}`
}
console.log(salary(4500))
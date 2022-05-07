// This is my traing script

let challenge = "30 Days of JavaScript"
console.log(challenge)
console.log(challenge.substring(0,2))
console.log(challenge.toUpperCase)
console.log(challenge.length)
console.log(challenge.includes("Days"))

let sentence = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let r = /\d+/g; //regular expression. d+ means search for a number with multiple digits g means whole file
let income = sentence.match(r)
console.log(income)
// console.log(typeof 10 == 10)
// let python = "Python"
// console.log(python.includes("on"))
// console.log(`Random number from 0 to 100: ${Math.random()*100}`)

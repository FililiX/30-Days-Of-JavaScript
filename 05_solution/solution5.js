// Arrays 

// create new 
const array = [1,2,3] 
const array2 = new Array(10).fill("X") // [X,X,X,X,X,X,X,X,X,X]
const array3 = array.concat(array2)
console.log(array3)
console.log(array3.includes("X"))
console.log(array3.lastIndexOf("X"))
console.log(array.toString())
array.push(4)
array.pop()
array.unshift(0) // adds newe element to the start of the array
array.sort()
array.reverse()


const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
console.log(names.join('')) //AsabenehMathiasEliasBrook
console.log(names.join(' ')) //Asabeneh Mathias Elias Brook
console.log(names.join(', ')) //Asabeneh, Mathias, Elias, Brook
console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook

const numbers = [1,2,3,4,5]

console.log(numbers.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position


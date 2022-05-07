// Booleans
let trueValue = 4>3
let firstName
console.log(firstName) // should write undefined

console.log(NaN === NaN) // === means exactly equal. (in value and in data type)
console.log(NaN == NaN) // interesting behaviour

// order of operators:
let value = 0
console.log(++value)
value = 0 
console.log(value++)

// Ternary
let isRaining = false
isRaining ? console.log("Yes, raining") : console.log("No, not raining")

// Window methods (pop - ups)
    // // Alert
    //     message = "This is an alert!"
    //     alert(message)

    // // Prompt
    //     prompt("required text", "optional text") // Required is the label, optinal is the fill inside prompt
    //     let number = prompt("Enter a number","i.e. 2000")
    //     console.log(number)

    // // Confirm
    //     const agree = confirm("Are you sure?")
    //     console.log(agree)

// Dates 

const ted = new Date()
console.log(ted)
const year = ted.getFullYear
const month = ted.getMonth
const date = ted.getDate
const timeInSecs = Date.now()

// ... hours minutes and so on








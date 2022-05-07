let word = "JavaScript"
let nums = [1,2,3]
let nums2 = nums
const PI = Math.PI

console.log(word.substring(0,4))

console.log(Math.round(PI))
console.log(Math.floor(PI))
console.log(Math.ceil(PI))
console.log(Math.min(nums))
const randomNum = Math.random()


let userOne = 
{
    name: "Filipek",
    role: "Model",
    country: "Czechia"
}

let userTwo = 
{
    name: "Nikolka",
    role: "Model",
    country: "Czechia"
}

console.log(userOne == userTwo)

let firstName = "Filip"
let lastName = "Radkozy"
let fullName = firstName + " " + lastName
let firstLetter = firstName[0]

console.log(fullName.toUpperCase() + " " + firstLetter)

const longString =    "This is a multiline string \
this is where it continues"
let splitArray = longString.split(" ")

// Split string on a " "
console.log(splitArray)
// String contains This
console.log(longString.includes("This"))

let a = 1
let b = 2
let c = 3
console.log(`Sum of: ${a} + ${b} + ${c} is equal to: ${a + b + c}`)


// you can create a string with flags.
let findKeyword = "This is a sentence in which there is a word love inserted."
let keyWord = /love/gi // flag g means global, searches in the whole text, i means case sensitive
console.log(findKeyword.search(keyWord)) // outputs the index where the string starts

let strNum = "9.124"
let castFloat = parseFloat(strNum)
let castFloat2 = Number(strNum)
let castFloat3 = +strNum
let floatToNum = parseInt(castFloat)
console.log(strNum, castFloat, castFloat2, castFloat3, floatToNum)

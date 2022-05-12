// Random chars of random length
let chars ="abcdefghijklmnopqrstuvwxyz123456789"
let randomString = ""
let len = Math.floor(Math.random()*chars.length)
for (let i = 0; i < len; i++) 
{   
    let charIdx = Math.floor(Math.random()*chars.length)
    randomString += chars[charIdx]
}
console.log(randomString)


// random color
let numbers = []
for (let i = 0; i < 3; i++)
{
    numbers.push(Math.floor(Math.random()*256))
}
console.log(`rgb(${numbers[0]},${numbers[1]},${numbers[2]})`)

// len of countries
let lens = []
for (const country of countries) 
{
    lens.push(country.length)
}
console.log(lens);

let str = "Ahoj"
str.includes
// Arrays of arrays
let array = []
for (const country of countries) 
{
    array.push([country, country.substring(0,3).toUpperCase(),country.length])    
}
console.log(array);

// print insides of the array
let fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

fullStack = fullStack.flat()
console.log(fullStack)

// Print countries including land
let lands = []
for (const country of countries)
    if (country.includes("land"))
        lands.push(country)

console.log(lands);

// Reverse and capitalize
let reversed = countries
countries.reverse()
let upper = countries.map(country => {return country.toUpperCase()})
console.log(upper);


// Exercises

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// log each country
countries.forEach(country => console.log(country))

// map to uppercase each country
countries.forEach(country => console.log(country.toUpperCase()))

// filter countries with 'land'
let lands = countries.filter(country => country.includes("land"))
console.log(lands)

// sum numbers in mubers1
let sum = numbers1.reduce((prev, current) => prev += current)
console.log(sum)

// concat the strings in the string array
let concat = countries.reduce((prev, next) => prev+=next)
console.log(concat)


// find the total price of the products by chaining callbacks
// map converts the product to their price property, filter chooses correct values, reduce accumulates
let totalPrice = products.map(product => product.price).filter(productPrice => productPrice > 0).reduce((acc, cur) => acc+= cur)
console.log(totalPrice)


// if the arrow functions points to brackets {} they have to return a value
const categorizeCountries = (countries) => {
    let coun = countries.filter(country => country.toLowerCase().includes("land"))
    return coun;
}
console.log(categorizeCountries(countries))




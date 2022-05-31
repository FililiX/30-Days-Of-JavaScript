// Destructing and spreading

// Ekvivalent dereference v Pythonu, aneb vytahnu ze struktury jeji prvky
let numbers = [1,2,3]
let [one, two, three] = numbers     // destructing
console.log(one, two, three)        // 1 2 3

let [one1, , three1] = numbers      // skipping two
console.log(one1, three1)           // 1 3


let numeros = [1,2,3,4,5,6,7,8,9,10]
let [one2, two2, three2, ...rest] = numeros
console.log(one2,two2, three2, rest)        // 1 2 3 [4, 5, 6, 7, 8, 9, 10]

// destructing during iteration
// const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]
// for (const [country, city] of countries) {
// console.log(country, city)
// }


// destructing an object
const rectangle = {
    width: 10,
    height: 5
}
let { width, height, area, perimeter } = rectangle
console.log(width, height, area, perimeter)


// destructing when passed to a function
const calculatePerimeter = ({ width, height }) => {
    return 2 * (width + height)
  }
  console.log(calculatePerimeter(rectangle)) // 30



const sumAllNums = (...args) =>
{
    let sum = 0
    for (const num of args){
        sum += num
    }
    return sum
}
console.log(sumAllNums(1, 2, 3, 4, 5))







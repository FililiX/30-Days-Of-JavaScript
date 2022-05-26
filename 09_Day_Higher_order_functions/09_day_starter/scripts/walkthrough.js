// This is the file in which i try the new shit they mentioned


// passing a function as a parameter
const callback = (n) => 
{
    return n**2
}

function cube(callback, n)
{
    return callback(n) * n
}
console.log(cube(callback,3))


// These arrow functions act as if you instantiated a variable
// and then made it into a function using the => 
const higherOrder = n => {
    const doShit = m => {
        const doOtherShit = t => {
            return 2*n + 3*m + t
        }
        return doOtherShit
    }
    return doShit
}
console.log(higherOrder(10)(3)(4))


// setInterval
// prints hello every 2 seconds
// function sayHello() {
//     console.log("Hello")
// }
// setInterval(sayHello,2000)

// setInterval((n=2) => { console.log(n**2)
// }, 1000);


// using .foreach with an array
let numbers = [5,6,1,7,9,4,1,70]
numbers.forEach(function(element, index, array) {
    console.log(element, index, array)
})

// or
numbers.forEach((element, index, array) => {
    console.log(element, index, array)
})


// map skoro jako python
// namapuje funkci na kazdy element v iterable
numbers.map((number) => console.log(number**2))


// Filter, podobne jak Python
// filter vraci novy array prvku, ktere splnuji podminku
let numbersBiggerThanThree = numbers.filter(number => number > 3 )
console.log(numbersBiggerThanThree)


// reduce
// calls the inner function, yields result for each element and 
// inputs the accumulated result into the next call
// second parameter is the initial value
let reduceExample = numbers.reduce((accumulate, currentValue) => accumulate + currentValue, 0)
console.log(reduceExample)


// every
// every checks if all elements in iterable follow the condition
let everyExample = numbers.every(number => number < 10)
console.log(everyExample)


// find 
// find returns the FIRST SINGLE element that sattisfies a certain condition
let findExample = numbers.find(number => 1 < number && number < 4)
console.log(findExample)


// sort
// inplace sort of an array
console.log(numbers.sort()) // this FAILS!
// because it compares the first digit (as if they were strings)
// to avoid this we use an inner function that compares the values for us
console.log(numbers.sort((a,b) => a-b)) // correcto


// poznamka: 
// foreach se seznamem prvku je IMMUTABLE
// pokud cchci upravovat, pouziju MAP





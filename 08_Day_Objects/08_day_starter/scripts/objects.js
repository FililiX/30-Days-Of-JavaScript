
// lets learn about objects

const rectangle = {
    legth: 20,
    width: 50
}
console.log(rectangle)

const me = {
    name: 'Filip',
    surname: "Rakoczy",
    age: 99,
    hobbies: [
        "watches",
        "photography",
        "science",
        "education",
        "AI",
        "Art"
    ],
    likeable: true,
    getFullName: function() {
        return `${this.name} ${this.surname}`
    }
}
console.log(me)
// These two are equivalent
me.age = 23
console.log(me.age)
console.log(me['age'])
console.log(me.getFullName())

// To copy an object without modifying the original, the assign method is used.
const copyOfMe = Object.assign({}, me)
console.log(copyOfMe)

// You can copy objects keys
const copyOfMeKeys = Object.keys(me)
console.log(copyOfMeKeys)

// You can copy values 
const copyOfMeValues = Object.values(me) // array is returned
console.log(copyOfMeValues)

const entries = Object.entries(me) // returns arrays of two "tuples" (arrays, really), key/value pairs
console.log(entries)

// set new object properties 
me.nationality = "Czech"
console.log(me)




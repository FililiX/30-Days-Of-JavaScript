
// Sets 
// sets are iterables 
const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]

const setOfLanguages = new Set(languages)
console.log(setOfLanguages)

for (const language of setOfLanguages) {
    console.log(language)
}

// add element to a set
setOfLanguages.add("German") // adds german
console.log(setOfLanguages) // Spanish, english...
console.log(setOfLanguages.size) // 5

// delete an element
console.log(setOfLanguages.delete("German")) // true
console.log(setOfLanguages.size) // 4

// check if element is in set
console.log(setOfLanguages.has("German")) // false

// mini challenge: create a hashmap with counts ofeach language
counts = []
for (const l of setOfLanguages) {
    const filteredLangs = languages.filter((language) => language === l) // ["English", "English"] ... ["German", "German"]
    counts.push({lang: l, count: filteredLangs.length}) // { object } 
}
console.log(counts)

// union of two sets
let a = [1,2,3,4,5,6]
let b = [3,4,5,9]
let A = new Set(a)
let B = new Set(b)
let c = [...a, ...b] // something like the * operator in python
let C = new Set(c)
console.log(C)

// intersection
let D = new Set(a.filter((num) => B.has(num))) // 3,4,5
console.log(D)

// Difference of sets using has
let E = new Set(a.filter((num) => !B.has(num))) // 1,2,6
console.log(E)


// Map (HashTable)
countriesArray = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]


const map = new Map(countriesArray)
console.log(map) //{'Finland' => 'Helsinki', ... }

// add
console.log(map.size) // 3
console.log(map.set("Czechia","Prague"))
console.log(map.size) // 4

// get a value according to a key
console.log(map.get("Finland")) // "Helsinki"

// Check if key exists
console.log(map.has("Czechia")) // true







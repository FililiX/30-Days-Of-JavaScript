// local storage HTML5 web storage
// everything in local storage is stored as a key / value pair


// setItem - inserting shit into localStorage
localStorage.setItem("Key","Value")         // string
localStorage.setItem("Number",23)           // number
localStorage.setItem("Array",[1,2,3,4,5])   // array

// Inserting an object => stringify first!
let skills = [
    { tech: 'HTML', level: 10 },
    { tech: 'CSS', level: 9 },
    { tech: 'JS', level: 8 },
    { tech: 'React', level: 9 },
    { tech: 'Redux', level: 10 },
    { tech: 'Node', level: 8 },
    { tech: 'MongoDB', level: 8 }
  ]
  
let skillsJSON = JSON.stringify(skills)
localStorage.setItem('skills', skillsJSON)
console.log(localStorage)


// getItem 
const arrrayFromStorage = localStorage.getItem("Array")
console.log(arrrayFromStorage)

  // getting an object => parse to object
let skillses = localStorage.getItem('skills')       
let skillsObj = JSON.parse(skillses, undefined, 4)
console.log(skillsObj)

// clearing using .clear()
localStorage.clear()
console.log(localStorage) // Storage {Length: 0}







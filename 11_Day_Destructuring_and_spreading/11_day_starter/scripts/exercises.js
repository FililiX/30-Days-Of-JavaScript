
// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const constants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, g, temp, boil] = constants
console.log(constants)

// data
const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
    ]

// Iterate through the users array and get all the keys of the object using destructuring
for (const {name, scores, skills, age} of users) {
    console.log(name, scores, skills, age)
}

// Find the persons who have less than two skills
let array = []
for (const {name, scores, skills, age} of users) {
    if (skills.length > 2) {
        array.push(name)
    }
}
console.log(array)



// Write a function called convertArrayToObject which can convert students the array to a structure object.
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'],
        [98, 85, 90, 95]
    ],
    ['John', ['HTM', 'CSS', 'JS', 'React'],
        [85, 80, 85, 80]
    ]
]

// unpack and print as an object
for (const [student, skills, scores] of students) {
    console.log({name: student,skills: skills, scores:  scores})
}


// data
const student = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }

// Copy and edit the student object
let Copy = {...student}
Copy.skills.frontEnd.push({skill: "Bootstrap", level: 8})
Copy.skills.backEnd.push({skill: "Express", level: 9})
Copy.skills.dataBase.push({skill: "SQL", level: 8})
Copy.skills.dataScience.push("SQL")
console.log(Copy)



//scope.js
let a = 'JavaScript' // declaring a variable without let or const make it available in window object and this found anywhere
let b = 10 // this is a global scope variable and found in the window object
function letsLearnScope() {
  console.log(a, b)
  if (true) {
      let a = "Python"
      let b = 100
    console.log(a, b) // Python 100
  }
}
letsLearnScope()
console.log(a, b) // accessible

// Variable is only scoped at the place I define it.

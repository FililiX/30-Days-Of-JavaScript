// Full name function
function fullName(firstName, lastName) {
    return firstName + " " + lastName
}
console.log(fullName("Filip","Rakoczy"))


// BMI function
function getBMIrating(weight, height){
    let BMI = weight/(height^2)
    let message = "You are "

    if (BMI < 18.5) {
        message += "Underweight "

    } else if (BMI < 25) {
        message += "normal weighted "   

    } else if (BMI < 30) {
        message += "Overweight "

    } else {
        message += "Obese "
    }
    return message + "and your BMI is " + BMI
}
console.log(getBMIrating(72,1.89))


// Quadratic equation solver
function quadraticEquationSolver(a,b,c){
    x1 = (-b+Math.sqrt(b*b - 4*a*c))/2*a
    x2 = (-b-Math.sqrt(b*b - 4*a*c))/2*a
    return [x1, x2]
}
console.log(quadraticEquationSolver(1,4,4))
console.log(quadraticEquationSolver(1,-1,-2))

// Show DateTime
function showDateTime() {
    const now = new Date()
    return now.toISOString()
    
}
console.log(showDateTime())

let arr = []

// Sahuffle array function 
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5)
}
let array = [1,2,3,4,5,6,7,8,9,10,11,12,13]
console.log(shuffleArray(array));

console.log(array);
function reverseArray(array){
    array.reverse()
    return array
}
let array1 = [1,2,3,4,5,6,7,8,9,10,11,12,13]
console.log(reverseArray(array1))



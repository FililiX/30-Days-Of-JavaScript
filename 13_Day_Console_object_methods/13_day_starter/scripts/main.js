console.log(countries)

// Walkthrough
console.log("30 days of JavaScript")

let num = 5
console.log(`Formated console output ${num}`)

// Color text
console.log('%c30 Days Of JavaScript', 'color:green', '') // log output is green
console.log(
  '%c30 Days%c %cOf%c %cJavaScript',
  'color:Black',
  '',
  'color:red',
  '',
  'color:brown'
) // log output green red and brown text


// warning
console.warn("This is a warning!") // displays a warning in the Console

// error
console.error("This is an error!")

// table
const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  }
console.table(user)

// Time
console.time("For loop")
for (let i = 0; i < 10000; i+=1)
{
    continue
}
console.timeEnd("For loop") // 0.1611 ms

// count
const func = () => {
    console.count("Function called")
}
func()
func()
func()

// clears the console
// console.clear()


console.log(countries)

// Walkthrough-  error handling

try {
    // code that may throw an error
  } catch (err) {
    // code to be executed if an error occurs
  } finally {
    // code to be executed regardless of an error occurs or not
}


try{
    let lastName = "Rakoczy"
    let fullname = lastName + firstName
} catch(error) {
    console.log(error) // nebo console.error(error)
} finally {
    console.log("Always executed")
}

// The throw keyword
    throw "Erorr2" // prints: Uncaught Error2
    throw new Error("Required message")

// Reference error - illegal reference == referencing to nonexistent variable name
    let firstName = 'Asabeneh'
    let fullName = firstName + ' ' + lastName

// Type error == data type does not match
    let num = 10
    console.log(num.toLowerCase())
    console.log(fullName)













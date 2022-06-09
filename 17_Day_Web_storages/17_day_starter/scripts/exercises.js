// Add an object to local storage

const studentObject = 
{
    name: "Filip", 
    surname: "Rakoczy", 
    age: "23",
    country: "Czechia",
    city: "Brno",
}

const studentObjectParsed = JSON.stringify(studentObject,undefined,0)
localStorage.setItem("StudentObject", studentObjectParsed)
console.log(localStorage)




// const doPromise = new Promise((resolve, reject) => {
//     setTimeout( () => {
//         const skills = ["HTML", "CSS", "JS"]
//         if (skills.length > 2)
//         {
//             resolve(skills)
//         } else 
//         {
//             reject("Something went wrong")
//         }
//     }, 2000)
// })

// doPromise
// .then( result => {
//     console.log(result)
// })
// .catch(error => console.log(error))

//// Fetching data from an API
// const url = 'https://restcountries.com/v2/all'
// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//     })
//     .catch(error => console.log(error))


// async and await functions
const urlko = 'https://restcountries.com/v2/all'
fetch(urlko)
    .then(response => response.json())
    .catch(error => console.log(error))

const fetchData = async () => {
    try {
        const response = await fetch(urlko)
        const countries = await response.json()
        console.log(countries)
    } catch (err) {
        console.log(err)
    }
}
console.log("===== async and await")
fetchData()





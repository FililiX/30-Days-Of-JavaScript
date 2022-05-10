console.log(countries)
console.log(webTechs)

if (countries.includes("Ethiopia"))
{
    console.log("ETHIOPIA")
}
else
{
    countries.push("Ethiopia")
}

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
text = text.replace(".","")
let words = text.split(" ")

console.log(words)
console.log(words.length)


countries.forEach(
    function (country) 
    {
        let p = document.createElement("p");
        p.textContent = country;
        document.querySelector("#countries").appendChild(p);
    })

webTechs.forEach(function (webTech) {
    let p = document.createElement("p");
    p.textContent = webTech;
    document.querySelector("#web-technologies").appendChild(p);
})

let middleCountry = document.createElement("p");
middleCountry.textContent = `the middle country is ${countries[countries.length / 2]}`


b = countries.length/2
console.log(b);
console.log(countries.slice(0, b))

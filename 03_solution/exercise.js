// Create a human readable time stamp

const now = new Date()
let DOW = now.getDay()
let DD = now.getDate()
let MM = now.getMonth()
let YYYY = now.getFullYear()
let HH = now.getHours()
let MMS = now.getMinutes()
let SS = now.getSeconds()

let dictDays = 
{
    1 : "Monday",
    2 : "Tuesday",
    3 : "Wednesday",
    4 : "Thursday",
    5 : "Friday",
    6 : "Saturday",
    7 : "Sunday"
}

console.log(`Today is ${dictDays[DD]} on the ${DD} of ${MM}. ${YYYY} and its ${HH}:${MMS}:${SS} o'clock.`)


// Annoying little prompt thingie
    // let a = prompt("Please insert a:")
    // let b = prompt("Please insert b:")
    // console.log(a*b)




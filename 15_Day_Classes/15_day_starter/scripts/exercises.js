

// Statistics thingie
//@ts-check
class Statistics{
    constructor(numbers){
        this._numbers = numbers
        this.setNumbers = function(numbers) {this._numbers = numbers}
        this.getNumbers = function() {return this._numbers}
    }

    count(){
        return this._numbers.length
    }

    sum(){  
        return this._numbers.reduce((acc, cur) => acc += cur)
    }
    
    min(){
        return Math.min(...this._numbers) // spread operator!
    }

    max(){
        return Math.max(...this._numbers)
    }

    // And so on and so forth

}

let ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
const statistics = new Statistics(ages)

console.clear()
console.log(statistics.getNumbers())

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
// console.log('Range: ', statistics.range() // 14
// console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ',statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Frequency Distribution: ',statistics.freqDist())
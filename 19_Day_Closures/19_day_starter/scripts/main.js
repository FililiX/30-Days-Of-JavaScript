
function outerFunc() {
    let count = 0;
    function plusOne(){
        count++ 
        return count
    }
    return plusOne
}
const innerFunc = outerFunc()
console.log(innerFunc())


function outerFunction() {
    let count = 1;

    function plusOne(){
        count++
        return count
    }

    function minusOne(){
        count--
        return count
    }

    return {plusOne:plusOne(), minusOne:minusOne()}
    
}

const innerFuncs = outerFunction()
console.log(innerFuncs.minusOne)
console.log(innerFuncs.minusOne)
console.log(innerFuncs.minusOne)
console.log(innerFuncs.plusOne)
console.log(innerFuncs.plusOne)

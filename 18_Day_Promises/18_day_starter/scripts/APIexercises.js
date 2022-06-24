// exercises level 3
    // Reading the cats API
const url = 'https://api.thecatapi.com/v1/breeds'

const fetchCats= async () => {
    try {
      const cats = await fetch(url).then(cats => cats.json())
      console.log(cats)
      let sum = 0
      cats.forEach(cat => {
          sum += parseInt(cat.weight.metric[0])
      }); 
      let avgWeight = sum/cats.length
      console.log(`The average weight of a cat is ${Math.round(avgWeight*100) / 100} kg`)
    } catch (err) {
      console.error(err)
    }
}

console.log('===== async and await')
fetchCats()










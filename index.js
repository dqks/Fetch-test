//GET запросы

const img = document.querySelector('.huy')
const images = 'https://jsonplaceholder.typicode.com/photos'
const span = document.querySelector('.title')

const delay = (ms) => { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, ms);
    })
}

const getImage = async (url) => {
    await delay(2000)
    const result = await fetch(url)
    const response = await result.json()
    console.log(response)
    img.src = response[0].url
    span.textContent = response[0].title
}
getImage(images)


// Замыкания
const needToKill = (num1) => {
return function (num2) {
    return console.log(num1* num2)
}
}

const needToKillTen = needToKill(10)
console.log(needToKillTen(20))


// array methods

const arr = [1,2,3,54,6,3,6,7,7,5,5,5,5,7,6,8,2,1,1]



const reduce = arr.reduce((num, total) => {return num + total})
console.log(reduce)



const mappa = arr.map((num100) => {return num100 * 10})
console.log(mappa)



const filter = arr.filter((num22) => {
    if (num22 > 10) {
        return true
    }
})

console.log(filter)

const set = new Set(arr)
console.log(set)



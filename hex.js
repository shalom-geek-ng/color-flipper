





// let hexColors = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
// let color = document.querySelector('.color')
// let btn = document.querySelector('.btn')

// btn.addEventListener('click',function(){
//     let hex = '#'

//     for(let i = 0; i<6; i++){
//         hex += hexColors[random()]
//     }
//     document.body.style.backgroundColor = hex
//     color.textContent = hex
// })

// function random(){
//     return Math.floor(Math.random()*hexColors.length)
// }
// let hexColors = [1,2,3,4,5,6,"A","B","C","D","E","F"]

let hexColors = [1,2,3,4,5,6,"A","B","C","D","E","F"]
let color = document.querySelector('.color')
let body = document.querySelector('body')
let btn = document.querySelector('.btn')

btn.addEventListener('click', function(){
    let hex = '#'
    for(let i = 0; i<6; i++){
        hex += hexColors[getRandomNumber()]
    }
    document.body.style.backgroundColor = hex
    color.textContent = hex
})

function getRandomNumber(){
return Math.floor(Math.random()*hexColors.length)
}
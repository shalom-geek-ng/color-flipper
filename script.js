// let colors = ['pink','yellow','green','purple','blue','brown','grey','white','black','violet','red']
// let color = document.querySelector('.color')
// let btn = document.querySelector('.btn')

// btn.addEventListener('click', function(){
//     let randomNumbers = [random()]
//     document.body.style.backgroundColor = colors[randomNumbers]
//     color.textContent = colors[randomNumbers]

// })

// function random(){
//     return Math.floor(Math.random()*colors.length)
// }


// let body = document.querySelector('body')
// let btn = document.querySelector('.btn')
// let color = document.querySelector('.color')
// let colors = ['red','black','gray','purple','aqua','yellow','orange']

// btn.addEventListener('click',function(){
//  getRandomNumber()
// })

// function getRandomNumber(){
//   let myrandomNumber = justRandom()
//   document.body.style.backgroundColor = colors[myrandomNumber]
// color.textContent= colors[myrandomNumber]
// }

// function justRandom(){
//     return Math.floor(Math.random()*colors.length)
// }

let color = document.querySelector ('.color')
let btn = document.querySelector('.btn')
let colors = ['red','blue','yellow','green','purple','aqua']
let body = document.querySelector('body')

btn.addEventListener('click', function(){
action()
})

function action(){
let randomNumber = random()
document.body.style.backgroundColor = colors[randomNumber]
color.textContent = colors[randomNumber]
}

function random(){
    return Math.floor(Math.random()*colors.length)
}
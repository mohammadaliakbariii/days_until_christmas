const christmas = '25 Dec 2023'

let days_el = document.querySelector("#days")
let hours_el = document.querySelector("#hours")
let minutes_el = document.querySelector("#mins")
let seconds_el = document.querySelector("#seconds")

function countDown(){
    const currentDay = new Date()
    const dateToChristmas = new Date(christmas)
    const total = Math.floor(dateToChristmas - currentDay) / 1000
    const days = Math.floor(total/3600/24)
    const houres = Math.floor(total/3600) % 24
    const minutes = Math.floor(total/60) % 60
    const second = Math.floor(total%60)
    console.log(total,minutes,houres,days,second)
    days_el.innerText = days
    hours_el.innerText = houres
    minutes_el.innerText = minutes
    seconds_el.innerText = second

}
countDown()
setInterval(countDown,1000)


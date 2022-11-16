import './style.css'

const createClock = () => {
  let count = 0
  let clock = `
  <div class="clock">
    <div class="clockHand hours"></div>
    <div class="clockHand minutes"></div>
    <div class="clockHand seconds"></div>
  </div>`
  document.body.innerHTML = clock
  setInterval( () => {
    const secondHand = document.querySelector(".seconds")
    const clockDeg = Number(count +=  6)
    secondHand.style.rotate= `${clockDeg}deg`
    console.log(clockDeg)
  },1000)
}

import './style.css'

function createPiano(){

  const PIANOKEYS = ["A","S","D","F","G","H","J","K","L"]
  const ALLKEYS = PIANOKEYS.map( (key,index) => 
    (`<div class="pianoKey" id=${index}> ${key} </div>`)).join(" ")

  setTimeout( () => 
  {
  const keySounds = document.querySelectorAll(".pianoKey")
  
  keySounds.forEach( key => 
  key.addEventListener("click", (e) => playMouseSound(e,key)))
  },100)

  const APP = document.getElementById("app")
  APP.innerHTML = ALLKEYS
} 

createPiano()

const playMouseSound = (e,key) => {
    
    e.target.classList.add("active")
    setTimeout( () => {
      e.target.classList.remove("active")
    },200)
    if(e.target === key ){
      let audio = new Audio(`/sounds/key0${Number(key.id) +1}.mp3`)
      audio.play()
    }
 
  }
const playKeyboardSound = (e) => {
  
  const getName = (e) => e.code
  
  console.log(e)
  if(getName(e) === "KeyA" ){
    let audio = new Audio(`/sounds/key01.mp3`)
    audio.play()
  }
  if(getName(e) === "KeyS" ){
    let audio = new Audio(`/sounds/key02.mp3`)
    audio.play()
  }
  if(getName(e) === "KeyD" ){
    let audio = new Audio(`/sounds/key03.mp3`)
    audio.play()
  }
  if(getName(e) === "KeyF" ){
    let audio = new Audio(`/sounds/key04.mp3`)
    audio.play()
  }
  if(getName(e) === "KeyG" ){
    let audio = new Audio(`/sounds/key05.mp3`)
    audio.play()
  }
  if(getName(e) === "KeyH" ){
    let audio = new Audio(`/sounds/key06.mp3`)
    audio.play()
  }

  if(getName(e) === "KeyJ" ){
    let audio = new Audio(`/sounds/key07.mp3`)
    audio.play()
  }
  if(getName(e) === "KeyK" ){
    let audio = new Audio(`/sounds/key08.mp3`)
    audio.play()
  }
  if(getName(e) === "KeyL" ){
    let audio = new Audio(`/sounds/key09.mp3`)
    audio.play()
  }
  if(getName(e) === "KeyM" ){
    let audio = new Audio(`/sounds/key10.mp3`)
    audio.play()
  }
}
  window.addEventListener("keydown",(e) => playKeyboardSound(e))
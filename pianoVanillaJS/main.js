import './style.css'

async function createPiano(){

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

}
  window.addEventListener("keydown", function(e){
    console.log(e)
  })
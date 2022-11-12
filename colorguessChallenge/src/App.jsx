import { useEffect,useState } from 'react'


function App() {
  const [fieldColor, setFieldColor] = useState("#151515")
  const [rightChoice,setRightChoice] = useState(false)
  const [nextRound,setNextRound] = useState(0)

  const getRandomHexColor = () => `#${Math.floor(Math.random()*0xffffff).toString(16).padEnd(6, "0")}`
  const newColor = getRandomHexColor()
  
  useEffect( () => {
    setFieldColor(newColor)
    setRightChoice(newColor)
  },[nextRound])
  const possibleAnswers = [rightChoice,getRandomHexColor(),getRandomHexColor().sort((a, b) => 0.5 - Math.random())] // shuffles array for randomness

  const checkIfCorrect = (e) => {
    e.target.innerHTML === fieldColor ? console.log("right Answer") : console.log("wrong answer")
      
  }
  return (
    <div className="App">
      <div className='colorfield' onClick={() => setNextRound(prev => prev+1)} style={{backgroundColor:`${fieldColor}`}}><span>{fieldColor}</span></div>
      <div className='buttonWrapper'>
        <button onClick={(e) => checkIfCorrect(e)}>{possibleAnswers[0]}</button>
        <button onClick={(e) => checkIfCorrect(e)}>{possibleAnswers[1]}</button>
        <button onClick={(e) => checkIfCorrect(e)}>{possibleAnswers[2]}</button>
      </div>  
    </div>
  )
}
   
    

export default App

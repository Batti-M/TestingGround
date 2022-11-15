import { useEffect,useState } from 'react'


function App() {
  const [fieldColor, setFieldColor] = useState("#151515")
  const [rightAnswer,setRightAnswer] = useState(false)
  

  const getRandomHexColor = () => `#${Math.floor(Math.random()*0xffffff).toString(16).padEnd(6, "0")}`
  const newColor = getRandomHexColor()
  
  
  const possibleAnswers = [fieldColor,getRandomHexColor(),getRandomHexColor()].sort((a, b) => 0.5 - Math.random()) // shuffles array for randomness return {}
    

  const checkIfCorrect = (e) => {
    e.target.innerHTML === fieldColor ? setRightAnswer(true) : e.target.style.backgroundColor = "red"
    
  }
  return (
    <div className="App">
      <div className='colorfield' onClick={ () => {setFieldColor(newColor);setRightAnswer(false)}} style={{backgroundColor:`${fieldColor}`}}></div>
      <div className='buttonWrapper'>
      {!rightAnswer &&  <button onClick={(e) => checkIfCorrect(e)}>{possibleAnswers[0]}</button>}
     { !rightAnswer &&  <button onClick={(e) => checkIfCorrect(e)}>{possibleAnswers[1]}</button>}
     { !rightAnswer &&  <button onClick={(e) => checkIfCorrect(e)}>{possibleAnswers[2]}</button>}
      </div>  
      {rightAnswer ? <p>You are right!</p> : ""}
    </div>
  )
}
   
    

export default App

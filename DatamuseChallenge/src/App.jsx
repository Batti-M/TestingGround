import { useState } from 'react'

/* 
Challenge is to fetch data from an API and display synonyms from a word
-after getting the data, create a list to show all synonyms
-enable clicking on those
-clicking starts a new api call with the new value of clicked item */

function App() {
  
  // ml = means like
  const [searchedWord,setSearchedWord] = useState("")
  const [allSynonyms,setAllSynonyms] = useState([])

  const searchForSynonyms = (e) => {
    
    const url = "https://api.datamuse.com/words?max=20&ml="
    fetch(`${url}${searchedWord}`)
    .then(res => res.json())
    .then(setAllSynonyms)
  }

  const handleChange = (e) => {
    setSearchedWord(e.target.value)
  }

const newWord = (e) => {
  setSearchedWord(e.target.innerHTML)
  searchForSynonyms()
}
  return (
    <div className="App">
      <input 
      type="text"
      value={searchedWord}
      placeholder={"search a word"}
      onChange={handleChange}
      >
      </input>
      <button onClick={searchForSynonyms}> Search now</button>
      <ul>
        {allSynonyms.map(word=> <li key={word.score} onClick={(e) =>  newWord(e)}>{word.word}</li>)}
      </ul>
    </div>
  )
}

export default App

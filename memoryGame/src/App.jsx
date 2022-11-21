import { useState } from 'react'
import {Card} from './Card'
import {CardContext} from "./CardContext"
/*
- api call with pictures 
-duplicate that array and concat both
-display the array -> map
-create a card
-implement function to shuffle all cards -> google for randomizing an array sort((a.b) => 0,5 - Math.random()) is not enough
-implement onclick function to show the card
-useState or useRef to allow only 2 cards to be shown
-implement a function to compare both cards
-put cards in player-array
-implement function to see if there a still cards available
if not, function for determine the winner
-useRef for determing what to render, options or the game
*/

function App() {
  const url="https://api.pexels.com/v1/"

  return (
    <CardContext>
      <div className="App">
        <h1> hello <a href="https://www.pexels.com">Photos provided by Pexels</a></h1>
        <Card />
      </div>

    </CardContext>
  )
}

export default App

import React, { useContext} from "react"
import {Context} from "./CardContext"

const Card = () => { 
   
    const {cards}= useContext(Context)
    const handleShown = (e) => {
       e.target.classList.add("displayNone")
    }

    const fillerDivs = new Array(20).fill("").map((el,index) => <div key={index} className="white" onClick={(e) => handleShown(e)}></div>)
    const cardElements = cards.map( (card,index) => 
    <div key={card.id} onClick={(e) =>console.log(e)} className="card" style={{backgroundImage:`url(${card.src.tiny})`}}>
    
    </div> )
    //backgroundImage:`url(${card.src.tiny}
    const duplicates = [...cardElements].map( (el,index) =>  <div key={index}> {el }</div>)
    const allCards = [...duplicates,...cardElements]
    allCards.sort((a,b) => allCards.length * Math.random() - 5 )
    //change class onclick
    return(
        
        <div className="container">
            {allCards}
        </div>
    )
}

export {Card}
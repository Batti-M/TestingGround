import { Component } from "react";
import {Monster} from "../App"


type CardProps = {
  monsters: Monster,
}
const Card = ({monsters}:CardProps) => {
  const {name,id,email} = monsters
  
  return(
    
    <div key={id} className="card-container">
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
)
   

}

export default Card
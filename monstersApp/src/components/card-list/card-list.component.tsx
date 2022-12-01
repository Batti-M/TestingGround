import { Component } from "react";
import Card from "../Card";
import {Monster} from "../../App"


type CardListProps = {
  monsters: Monster[]
}

const CardList = ({monsters} : CardListProps) => {
 
    
    return (
      <div className="card-list">
        {monsters.map((monster) => {

          return (
            <Card monsters={monster}/>
          );
        })}
      </div>
    );

}

export { CardList };

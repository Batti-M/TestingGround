import { Component } from "react";
import Card from "../Card";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    console.log("rendered from cardlist");
    return (
      <div className="card-list">
        {monsters.map((monster) => {

          return (
            <Card monster={monster}/>
          );
        })}
      </div>
    );
  }
}

export { CardList };

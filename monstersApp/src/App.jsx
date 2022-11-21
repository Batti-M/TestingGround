import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./index.css"
// shallow merge only updates the keys i put into setState, react doesnt care what the value was before
// react batches different states that's why its async, so console.log shows old state

class App extends Component {
  constructor() {
    super(); //calls constructor method on component

    this.state = {
      monsters: [],
      searchField: "",
    }; //always a json object , key/value pairs
   
  }

  //lifecycleMethods, type only "component" to see different methods
  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((res) => res.json()) //.then returns another promise
      .then((data) => this.setState({ monsters: data }));
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() =>{ return {searchField:searchField}})
  };

  render() {
    const { onSearchChange } = this;
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <SearchBox
        className="search-box" 
        onChangeHandler={onSearchChange}
        placeholder="search monster"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

/* 
pure function: const pureFunc = (a,b) => a+b
returns the same thing every time ,return is only dependend on the props that are
passed in

let c=3;
const funcA = (a,b) => {
  return a+b+c
} not pure because c can change
*/

/*SIDEEFFECT
let c=3
const funcB = (a,b) => {
  c=a+b
  return a*b
}
*/
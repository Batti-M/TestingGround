import { useEffect } from "react";
import { useState , ChangeEvent} from "react";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./index.css"

import {getData} from "./utils/data.utils"

// shallow merge only updates the keys i put into setState, react doesnt care what the value was before
// react batches different states that's why its async, so console.log shows old state

export type Monster = {
  id: string,
  name: string,
  email: string,
}

const APP = () =>  {
  const [searchField, setSearchField] = useState("");
  const [monsters,setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters,setFilteredMonsters] = useState(monsters)
  //lifecycleMethods, type only "component" to see different methods
 
  useEffect( () =>  {
    const url = "https://jsonplaceholder.typicode.com/users";
    // fetch(url)
    //   .then((res) => res.json()) //.then returns another promise
    //   .then((data) => setMonsters(data));
    const fetchUsers = async() => {
      const users = await getData<Monster[]>(url);
      setMonsters(users)
    }
    fetchUsers()
  },[]
 )
 
 useEffect(() => {
   const newFilteredMonsters = monsters.filter((monster) => {
     return monster.name.toLocaleLowerCase().includes(searchField);
   });
   setFilteredMonsters(newFilteredMonsters);
 },[monsters,searchField])

 {

  const onSearchChange =( event: ChangeEvent<HTMLInputElement> ):void=> {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)
  }
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

export default APP;

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
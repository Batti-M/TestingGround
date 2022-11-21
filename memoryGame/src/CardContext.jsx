import React, { useState } from "react";
import { useEffect } from "react";

const Context = React.createContext();

const CardContext = (props) => {
  const [cards, setCards] = useState([]);

  const getData = () => {
    const url = "https://api.pexels.com/v1/search?query=nature&per_page=10";
    fetch(url, {
      headers: {
        Authorization:
          "563492ad6f91700001000001c82e8a9bc1ec4d6fa8a7363531aeecba",
      },
    })
      .then((res) => res.json())
      .then((data) => setCards(data.photos));
  };
  useEffect(() => {
    getData();
    
  }, []);

  return (
    <Context.Provider value={{ cards }}>{props.children}</Context.Provider>
  );
};

export { CardContext, Context };

import { useState } from "react";
import "/src/components/category.item/category-item.style.scss";
import Directory from "./components/directory/directory-component";
import Home from "./routes/home/home.component";
import {Routes, Route, Outlet} from "react-router-dom"
import Navigation from "./routes/navigation/navigation.component"
import Authentification from "./routes/authentification/authentification.component";


function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={ <Home />}/>
        <Route path="auth" element={<Authentification />} />
      </Route>
     
    </Routes>
  );
}

export default App;

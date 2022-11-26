
import "/src/components/directory-item/directory-item.styles.jsx";
import Directory from "./components/directory/directory-component";
import Home from "./routes/home/home.component";
import {Routes, Route} from "react-router-dom"
import Navigation from "./routes/navigation/navigation.component"
import Authentification from "./routes/authentification/authentification.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./components/checkout/checkout.component";

function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={ <Home />}/>
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/auth" element={<Authentification />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
     
    </Routes>
  );
}

export default App;

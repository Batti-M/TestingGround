import { useEffect } from "react";
import {useDispatch} from "react-redux"

import { setCurrentUser } from "./store/user/user.action";
import { onAuthStateChangedListener,
  createUserDocumentFromAuth,
   signOutUser } from "./utils/firebase/firebase.utils";
import "/src/components/directory-item/directory-item.styles.jsx";
import Directory from "./components/directory/directory-component";
import Home from "./routes/home/home.component";
import {Routes, Route} from "react-router-dom"
import Navigation from "./routes/navigation/navigation.component"
import Authentification from "./routes/authentification/authentification.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./components/checkout/checkout.component";

function App() {

  const dispatch = useDispatch();

  useEffect( () => {
    const unsubscribe = onAuthStateChangedListener(
     (user) => {
         if(user){
             createUserDocumentFromAuth(user)
         }
        dispatch(setCurrentUser(user)); 
     }
    )

    return unsubscribe
 },[]);
 
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

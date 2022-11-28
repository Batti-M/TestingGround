import { createContext , useState, useReducer,useEffect} from "react";
import { onAuthStateChangedListener,createUserDocumentFromAuth, signOutUser } from "../../utils/firebase/firebase.utils";
// actual value for access

import { createAction } from "../../utils/reducer.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: "SET_CURRENT_USER"
}

const userReducer = (state,action) => {
    const {type,payload} = action;
    console.log(action)
    switch(type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
        return{
            ...state,
            currentUser: payload
        }
    
    default: 
        throw new Errow(`unhandled type ${type} in the userReducer`)
   }
}
const INITIAL_STATE = {
    currentUser: null
}

export const UserProvider = ({children}) => {
    //const [currentUser, setCurrentUser] = useState(null);
    const [state, dispatch] = useReducer( userReducer,INITIAL_STATE)
    const {currentUser} = state
   

    const setCurrentUser = user => {
        dispatch(createAction( USER_ACTION_TYPES.SET_CURRENT_USER,user))
    }
    const value = {currentUser, setCurrentUser}
   

    useEffect( () => {
       const unsubscribe = onAuthStateChangedListener(
        (user) => {
            if(user){
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user);
        }
       )

       return unsubscribe
    },[]);

    return(
    <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
    )
}

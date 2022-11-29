import { StrikethroughS } from "@mui/icons-material";
import { store } from "./store"

const unsubscribe = store.subscribe( () => {
  console.log("store changed", store.getState());
})

store.dispatch({
  type: "ADD_BUG",
  payload: {
    description:  "bug1"
  }
})

store.dispatch({
  type: "REMOVE_BUG",
  payload:{
    description: "bug1"
  }
})

unsubscribe();

store.dispatch({
  type: "REMOVE_BUG",
  payload:{
    id: 1
  }
})
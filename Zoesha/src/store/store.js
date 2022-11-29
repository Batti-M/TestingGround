
import { ContentPasteSearchOutlined } from "@mui/icons-material";
import { ActionCodeOperation } from "firebase/auth";
import {compose,createStore, applyMiddleware} from "redux";

import logger from "redux-logger";

import { rootReducer } from "./root-reducer";



const loggerMiddleWare = store => next => action => {
    if(!action.type){
        return next(action);
    }

    console.log("type", action.type)
    console.log("payload", action.payload)
    console.log("currentState", store.getState())

    next(action);

    console.log("next state", store.getState())
}

//whenever u dispatch an action, before the action hits reducer, it hits middleware
const middleWares = [loggerMiddleWare];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer,undefined, composedEnhancers)

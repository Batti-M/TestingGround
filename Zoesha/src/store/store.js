
import { ActionCodeOperation } from "firebase/auth";
import {compose,createStore, applyMiddleware} from "redux";

import logger from "redux-logger";

import { rootReducer } from "./root-reducer";



//whenever u dispatch an action, before the action hits reducer, it hits middleware
const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer,undefined, composedEnhancers)



let lastId = 0;

export const reducer = (state = [],action) => {
    switch(action.type){
        case(action.type === "ADD_BUG"):
        return{   
            ...state,
            id: ++lastId,
            descrition: action.payload.describtion,
            resolved: false
        }
        case(action.type === "REMOVE_BUG"):{
            return state.filter(bug => bug.id !== action.payload.id)}
        
        default:
            return state;
    }
}
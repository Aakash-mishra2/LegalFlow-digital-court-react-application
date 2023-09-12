import { configureStore } from "@reduxjs/toolkit";
const countReducer = (state = {counter: 0}, action)=>{
     if(action.type === 'increment'){
        return {
            counter: state.counter + 1,
        };
     }
     if( action.type === 'decrement'){
        return {
            counter: state.counter - 1,
        };
     }
     if( action.type === 'addValue'){
        return {
            counter: state.counter + action.amount,
        };
     }
     if( action.type === 'reset'){
        return {
            counter: 0
        }
     }

     return state;
};

const store = configureStore({
    reducer: {
        counter: countReducer,
    }
});

export default store;


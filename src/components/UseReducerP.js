import React from 'react'
import { useReducer } from 'react'

export default function UseReducerP(){

    const [state,dispatch] = useReducer(reducer,{count:0});

    function reducer(state,action){
        switch(action.type){
        case 'increment':
            return { count:state.count++}
        case 'decrement':
            return { count:state.count--}
        default:
            return state
    }
    }
    
 

    return <>
            <button
            onClick={()=>dispatch({type:'decrement'})}>-</button><h2>{state.count}</h2><button onClick={()=>dispatch({type:'increment'})}>+</button>
    </>
}
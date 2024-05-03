import React, { useReducer, useState } from 'react'

export default function TodoApp(){
    const initialTodo = [
        {   id:"sdfgh56789",
            name:"cook",
            complete:false
        },
        {   id:"sdfgh56790",
            name:"learn",
            complete:false
        },
    ]

    const [todoState,dispatch] = useReducer(reducer,initialTodo);

    function reducer(state,action){
        switch(action.type){
            case 'add-todo':
                return [...state,action.payload]
            case 'toggle':
                return state.map((todo)=>{
                    if(todo.id === action.payload.id){
                       return  {...todo,complete:!todo.complete}
                    }
                    return todo
                        })
            case 'delete-todo':
                return state.filter(todo=> todo.id !== action.payload.id)
            default:
                return state
        }
    }
    const [userinput,setUserInput] = useState('');
    function addTodo(e){
        e.preventDefault()
        dispatch({type:'add-todo',payload:{id:Date.now(),name:userinput,completed:false}})
        setUserInput('')
    }
    function toggle(id){
            dispatch({type:'toggle',payload:{id:id}})
            
    }
    function deleteTodo(id){
        dispatch({type:"delete-todo",payload:{id:id}})
    }
return (
    <>
    <form onSubmit={addTodo}>
        <input type='text' value={userinput} onChange={(e)=>(setUserInput(e.target.value))}></input>
    </form>
    {todoState.map((todo)=>(<div style={{display:'flex'}} key={todo.id}><h3 style={{color:todo.complete?'grey':'black', textDecoration:todo.complete?'line-through':'none'}}>{todo.name}</h3><button onClick={()=>toggle(todo.id)}>toggle</button><button onClick={()=>deleteTodo(todo.id)}>delete</button></div>))}
      </>
)
}
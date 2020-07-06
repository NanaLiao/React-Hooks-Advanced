import React,{useReducer}from 'react'; // like other hooks, useReducer also is a function


const initialState = {
  firstCounter:0,
  secondCounter:10
};
const reducer = (state,action) => { // we have 3 actions here:Increment,Decrement,Reset
  switch(action.type){
    case 'increment':
      return {...state,firstCounter:state.firstCounter + action.value};
    case 'decrement':
      return {...state,firstCounter:state.firstCounter -  action.value};
      case 'increment2':
        return {...state,secondCounter:state.secondCounter + action.value};
      case 'decrement2':
        return {...state,secondCounter:state.secondCounter -  action.value};
    case 'reset':
      return initialState;
    default:
      return state;
  }

}

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer,initialState) // useReducer is similar to useState, return arr with current state and dispatch method, this dispatch allows us to execute code corresponding to action

  return (
    <div>
      <div>firstCounter - {count.firstCounter}</div>
      <div>secondCounter - {count.secondCounter}</div>

    <button onClick = {()=>dispatch({type:'increment',value:1 })}>Increment</button>
    <button onClick = {()=>dispatch({type:'decrement',value:1 })}>Decrement</button>
    <button onClick = {()=>dispatch({type:'increment',value:5 })}>Increment5</button>
    <button onClick = {()=>dispatch({type:'decrement',value:5 })}>Decrement5</button>
    <button onClick = {()=>dispatch({type:'reset'})}>Reset</button>
    <button onClick = {()=>dispatch({type:'increment2',value:1 })}>IncrementCounter2</button>
    <button onClick = {()=>dispatch({type:'decrement2',value:1 })}>DecrementCounter2</button>
    </div>
  )
}

export default CounterTwo;
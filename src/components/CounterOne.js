import React,{useReducer}from 'react'; // like other hooks, useReducer also is a function


const initialState = 0;
const reducer = (state,action) => { // we have 3 actions here:Increment,Decrement,Reset
  switch(action){
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }

}

function CounterOne() {
  const [count, dispatch] = useReducer(reducer,initialState) // useReducer is similar to useState, return arr with current state and dispatch method, this dispatch allows us to execute code corresponding to action


  return (
    <div>
      <div>count - {count}</div>
      <button onClick = {()=>dispatch('increment')}>Increment</button>
      <button onClick = {()=>dispatch('decrement')}>Decrement</button>
      <button onClick = {()=>dispatch('reset')}>Reset</button>
      
    </div>
  )
}

export default CounterOne

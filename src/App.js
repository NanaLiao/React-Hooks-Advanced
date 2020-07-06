import React, { useState, useReducer } from 'react';
import './App.css';

import Search from './components/search';
import Result from './components/result';
import TextInputWithFocusButton from './components/useRefPractice';
import ComponentC from './components/ComponentC';
import CounterOne from './components/CounterOne'; // useReducer practice
import CounterTwo from './components/CounterTwo'; // useReducer practice
import CounterThree from './components/CounterThree';// useReducer practice
import ComponentA from './components/ComponentA';// useReducer+ useContext practice
import ComponentB from './components/ComponentB';// useReducer+ useContext practice
import ComponentC2 from './components/ComponentC2';// useReducer+ useContext practice

export const UserContext = React.createContext(); // useContext practice
export const ChannelContext = React.createContext(); // useContext practice

export const CountContext = React.createContext();// useReducer+ useContext practice

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
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


function App() {

  const [count, dispatch] = useReducer(reducer, initialState);

  const [data, setData] = useState('');

  const dataHandler = (data) => {
    setData(data);
  }

  return (
    <>
      <Search result={dataHandler} />
      <Result receivedData={data} />

      <TextInputWithFocusButton />

      <UserContext.Provider value={'Vishwas'}>
        <ChannelContext.Provider value={'Codevolution'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>

      <CounterOne />
      <CounterTwo />{/* use action as object, we can use additional data in reducer function */}
      <CounterThree /> {/* multiple useReducers */}

      <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
        <h2>useReducer + useContext: Count - {count}</h2>
        <ComponentA />
        <ComponentB />
        <ComponentC2 />
      </CountContext.Provider>



    </>
  );
}

export default App;

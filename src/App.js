import React, { useState } from 'react';
import './App.css';

import Search from './components/search';
import Result from './components/result';
import TextInputWithFocusButton from './components/useRefPractice';
import ComponentC from './components/ComponentC';
import CounterOne from './components/CounterOne'; // useReducer practice
import CounterTwo from './components/CounterTwo'; // useReducer practice
import CounterThree from './components/CounterThree';// useReducer practice

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {

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

      <CounterOne/>
      <CounterTwo/>{/* use action as object, we can use additional data in reducer function */}
      <CounterThree/> {/* multiple useReducers */}
     



    </>
  );
}

export default App;

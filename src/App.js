import React,{useState} from 'react';
import './App.css';
import Search from './components/search';
import Result from './components/result';
import TextInputWithFocusButton from './components/useRefPractice';

function App() {

  const [data,setData] = useState('');
  
  const dataHandler = (data)=>{
    setData(data);
  }

  return (
    <>
    <Search result={dataHandler}/>
   <Result receivedData={data}/>

   <TextInputWithFocusButton/>


    </>
  );
}

export default App;

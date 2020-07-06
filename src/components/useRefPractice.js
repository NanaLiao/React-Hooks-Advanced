import React,{useRef,useEffect,useState} from 'react';

function TextInputWithFocusButton() {

  //example of focus on input box after loading the component
  // const inputEl = useRef(0);
  // useEffect(()=>{
  //   inputEl.current.focus()
  // },[])
  // return (
  //   <>
  //     <input ref={inputEl} type="text" />
  //   </>
  // );

  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  useEffect(()=>{
    intervalRef.current = setInterval(()=>{
      setTimer(prev=>prev + 1)
    },1000)
  },[]);

  return (
    <div>
      Hook timer - {timer}
      <button onClick={()=> clearInterval(intervalRef.current)}>click me</button>
    </div>
  )



}

export default TextInputWithFocusButton;
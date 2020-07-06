import React from 'react';

const Result = props => {
  const show = <div>
    <p>name:</p>
    <p>{props.receivedData.name}</p>
    <p>height:</p>
    <p>{props.receivedData.height}</p>
  </div>


  return (
    <>
   {props.receivedData? show:null}


    </>
  )
}

export default Result;
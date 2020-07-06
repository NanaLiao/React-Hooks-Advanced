import React,{useState} from 'react';
import axios from 'axios';

const Search = props =>{
  const [search,setSearch] = useState('');
  const [id,setId] = useState('');
  const [data,setData] = useState('');

  const submitHandler = e =>{
    e.preventDefault();
    
    axios.get('https://swapi.dev/api/'+search+'/'+id)
    .then(res=>setData(res.data))
    .catch(err=>console.log(err));
    props.result(data);
  }

  return(
    <form onSubmit={submitHandler}>
      <label >Search for: </label>
      <input type="text" value={search} onChange={e=>setSearch(e.target.value)}/>
      <label >ID: </label>
      <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
      <input type="submit" value='Search'/>
    </form>
  )
};

export default Search;
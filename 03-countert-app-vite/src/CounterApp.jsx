import {useState} from 'react'
import PropTypes from 'prop-types';


export const CounterApp=({value}) => {
  
  const [ counter ,setCounter] = useState(value);

  const handleAdd = ()=>{
    setCounter(counter + 1);
  }
  
  const handleLess = ()=>{
    setCounter(counter -1 );
  }

  const handleResset = ()=>{
    setCounter(value );
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{ counter }</h2>
      <button onClick={ handleAdd }>+1</button>
      <button onClick={ handleLess }>-1</button>
      <button onClick={ handleResset } >Reset</button>
    </>
  );
};

CounterApp.prototype = {
  value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
  value: 0,
};


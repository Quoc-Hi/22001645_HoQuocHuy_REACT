import { useState, useReducer, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function reducer(state, action) {
    console.log(action);
    switch (action.type) { 
      case '+':
        return { ...state, count: state.count + 1 };
      case '-':
        return { ...state, count: state.count - 1 };
      default:
        return state;
    }
  }

  var [state, dispatch] = useReducer(reducer, { count: 0 });
  var valueInput = useRef(0);
  
  var [name,setName] = useState(undefined);
  var [data,setData] = useState([]);
  useEffect(()=>{
    var url ='https://67da1c8d35c87309f52b0083.mockapi.io/name/hieu';
    fetch(url).then((res)=>{
      return res.json();
    }).then((dataApi)=>{
      setData(dataApi);
    })
  })

  function handlePlus() {
    dispatch({ type: '+' });
  }

  function handleMinus() {
    dispatch({ type: '-' });
  }
  function handleRef(){
    console.log('====================================');
    console.log(valueInput.current.value);
    console.log('====================================');
    setName(valueInput.current.value);
  }

  return (
    <>
    <ul>
      {
        data.map((item,index)=>{
          return <li key={index}>{item.name}</li>
        })
      }
    </ul>
      <input ref={valueInput} type="text" /><br />
      <span >{name}</span><br />
      <button onClick={handleRef} style={{ backgroundColor: 'blue' }}>Print</button><br />
      <span>{state.count}</span><br />
      <button onClick={handlePlus} style={{ backgroundColor: 'green' }}>Increase</button>
      <button onClick={handleMinus} style={{ backgroundColor: 'red' }}>Decrease</button>
    </>
  )
}

export default App
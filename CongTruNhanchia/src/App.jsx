import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [a, setA] = useState(0);

  const [b, setB] = useState(0);

  const [result, setResult] = useState(0);

  const [value, setValue] = useState('');

  function handlesetA(e){
    setA(e.target.value)
  }

  function handlesetB(e){
    setB(e.target.value)
  }

  function handleClick(){
    console.log(value);
    if (value == '1') {
      setResult(parseInt(a) + parseInt(b));
    } else if (value == '2') {
      setResult(parseInt(a) - parseInt(b));
    } else if (value == '3') {
      setResult(parseInt(a) * parseInt(b));
    } else if (value == '4') {
      setResult(parseInt(a) / parseInt(b));
    }
  }

  function handleChange(e){
    setValue(e.target.id);
  }

  return (
    <>
      <input placeholder='input a' onChange={handlesetA} type="text" />
      <br />
      <input placeholder='input b' onChange={handlesetB} type="text" />
      <br />

      <input id='1' onChange={handleChange} type="radio" name='group' /><span>+</span>
      <input id='2' onChange={handleChange} type="radio" name='group' /><span>-</span>
      <input id='3' onChange={handleChange} type="radio" name='group' /><span>*</span>
      <input id='4' onChange={handleChange} type="radio" name='group' /><span>/</span>
      <br />
      <button onClick={handleClick}>Calculation</button>
      <br />
      <span>Ket qua: {result}</span>
    </>
  )
}

export default App

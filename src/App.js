import './App.css';

import { useDispatch, useSelector } from "react-redux/es/exports"
import { types } from './redux/types'
import { useState } from 'react';
import { setResult } from './redux/actions';





function App() {

  const dispatch = useDispatch()
  const result = useSelector(store => store.reducer.result)
  const [firstValue, setFirstValue] = useState(0)
  const [secondValue, setSecondValue] = useState(0)
  console.log(result);

  const plus =() => {
    if(firstValue && secondValue) {
      dispatch (setResult(+firstValue + +secondValue))
    } else {
      alert('Поле не должно быть пустым')
    }
  }
  const minus =() => {
    if(firstValue && secondValue) {
     dispatch (setResult(+firstValue - +secondValue))
    } else {
      alert('Поле не должно быть пустым')
    }
  }
  const mult =() => {
    if(firstValue && secondValue) {
      dispatch (setResult(+firstValue * +secondValue))
  } else {
    alert('Поле не должно быть пустым')
  }
  }
  const divide =() => {
    if(firstValue && secondValue) {
     dispatch (setResult(+firstValue / +secondValue))
  } else {
    alert('Поле не должно быть пустым')
  }
  }


  const setFirstNumber = (e) => {
    setFirstValue(e.target.value)
  }
  const setSecondNumber = (e) => {
    setSecondValue(e.target.value)
  }


  return (
    <div className='wrap'>
      <h2>Калькулятор</h2>

      <div className='num'>

        <div className='num2'>
          <input type="number" onChange={setFirstNumber} placeholder='введите число' value={firstValue} key={1} />
          <input type="number" onChange={setSecondNumber} placeholder='введите число' value={secondValue} key={2} />
         
          <span>{result}</span>
        </div>
        
        
        <div className='btn'>
          <button onClick={plus}>+</button>
          <button onClick={minus}>-</button>
          <button onClick={mult}>*</button>
          <button onClick={divide}>/</button> 
        </div>

      </div>     

    </div>
  );
}

export default App;

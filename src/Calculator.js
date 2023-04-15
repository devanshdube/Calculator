import React, { useState } from 'react';
import './CalcuButton.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [previousInput, setPreviousInput] = useState('');
  const [operation, setOperation] = useState(null);

  const clear = () =>{
    setInput("");
  }
  const handleNumberClick = (event) => {
    setInput(input + event.target.value);
  };

  const handleOperationClick = (event) => {
    setPreviousInput(input);
    setInput('');
    setOperation(event.target.value);
  };

  const handleEqualClick = () => {
    if (previousInput && input) {
      let result;
      switch(operation) {
        case '+':
          result = parseFloat(previousInput) + parseFloat(input);
          break;
        case '-':
          result = parseFloat(previousInput) - parseFloat(input);
          break;
        case '*':
          result = parseFloat(previousInput) * parseFloat(input);
          break;
        case '/':
          result = parseFloat(previousInput) / parseFloat(input);
          break;
        default:
          return;
      }
      setInput(result.toString());
      setPreviousInput('');
      setOperation(null);
    }
  };

  return (
    <div className='calculator'>

      <div className='warpItems'>
      <input type="text" value={input} style={{width:"98%", height:"35px", fontSize:"25px"}}/>
        <div className='wrapRow'>
         <button onClick={handleEqualClick} className='btn-wrap'>=</button>
         <button onClick={clear} className='btn-wrap' style={{background:"red"}}>clear</button>
       </div>

       <div className='wrapRow'>
         <button value="1" onClick={handleNumberClick} className='btn-wrap'>1</button>
         <button value="2" onClick={handleNumberClick}  className='btn-wrap'>2</button>
         <button value="3" onClick={handleNumberClick}  className='btn-wrap'>3</button>
         <button value="+" onClick={handleOperationClick}  className='btn-wrap' style={{background:"orange"}}>+</button>
       </div>

       <div className='wrapRow'>
         <button value="4" onClick={handleNumberClick}  className='btn-wrap'>4</button>
         <button value="5" onClick={handleNumberClick}  className='btn-wrap'>5</button>
         <button value="6" onClick={handleNumberClick}  className='btn-wrap'>6</button>
         <button value="-" onClick={handleOperationClick}  className='btn-wrap' style={{background:"orange"}}>-</button>
       </div>

       <div className='wrapRow'>
         <button value="7" onClick={handleNumberClick}  className='btn-wrap'>7</button>
         <button value="8" onClick={handleNumberClick}  className='btn-wrap'>8</button>
         <button value="9" onClick={handleNumberClick}  className='btn-wrap'>9</button>
         <button value="*" onClick={handleOperationClick}  className='btn-wrap' style={{background:"orange"}}>*</button>
       </div>

       <div className='wrapRow'>
         <button value="0" onClick={handleNumberClick}  className='btn-wrap'>0</button>
         <button value="." onClick={handleNumberClick}  className='btn-wrap' style={{background:"orange"}}>.</button>
         <button value="/" onClick={handleOperationClick}  className='btn-wrap' style={{background:"orange"}}>/</button>
       </div>
      </div>
    </div>
  );
}

export default Calculator;

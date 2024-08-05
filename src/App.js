import React, {useState} from "react";
import "./App.css"


const App = () => {

  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState("");
  console.log(`firstNumber: ${firstNumber}`);
  console.log(`secondNumber: ${secondNumber}`);
// addition function
  function handleAdd() {
    if (firstNumber==="" && secondNumber==="") {
      setResult("Input cannot be empty!")
    }
    else if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
      let sum = parseFloat(firstNumber) + parseFloat(secondNumber)
      setResult(sum);
      
    } else {
      setResult("invalid input")
    }
  }
  // multiplication function
  function handleMulti() {
    if (firstNumber==="" && secondNumber==="") {
      setResult("Input cannot be empty!")
    }
    else if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
      let sum = parseFloat(firstNumber) * parseFloat(secondNumber)
      setResult(sum);
      
    } else {
      setResult("invalid input")
    }
  }
  // Subtraction function
  function handleSub() {
    if (firstNumber==="" && secondNumber==="") {
      setResult("Input cannot be empty!")
    }
    else if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
      let sum = parseFloat(firstNumber) - parseFloat(secondNumber)
      setResult(sum);
      
    } else {
      setResult("invalid input")
    }
  }
  // Division function 
  function handleDiv() {
    if (firstNumber==="" && secondNumber==="") {
      setResult("Input cannot be empty!")
    }
    else if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
      let sum = parseFloat(firstNumber) / parseFloat(secondNumber)
      setResult(sum);
      
    } else {
      setResult("invalid input")
    }
  }
  

  return(
    <div>
      <h1>Simple React Calculator</h1>
      <input type="text" placeholder="Enter first number" onChange={(e)=>{setFirstNumber(e.target.value)}}></input>
      <br></br>
      <input type="text" placeholder="Enter first number" onChange={(e)=>{setSecondNumber(e.target.value)}}></input>
      <br></br><br></br>
      <div >
        <button onClick={handleAdd}>+</button>
        <button onClick={handleMulti}>*</button>
        <button onClick={handleSub}>-</button>
        <button onClick={handleDiv}>/</button>
      </div>
      <br></br><br></br>
      <div>
           {
            result!=="" && result!== "invalid input" && result!== "Input cannot be empty!"   ? 
            (
              <div>
                <h3 style={{color:"green"}}>Result: {result}</h3>
              </div>
            ) : 
            (
            <div>
              <h3 style={{color:"red"}}>Please Enter a Valid Number</h3>
              </div>
              )
           }
        </div>
    </div>
  )
}

export default App;
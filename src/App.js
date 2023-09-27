import { useState } from 'react';
import './App.css';
import { TextField,Stack,Button } from '@mui/material';

function App() {
  const [interest,setInterest]=useState(0)
  const [Principle,setPrinciple]=useState(0)
  const [rate,setRate]=useState(0)
  const [year,setYear]=useState(0)

  const[isPrincipleValid,setIsPrincipleValid] = useState(true)
  const[isRateValid,setIsRateValid] = useState(true)
  const[isYearValid,setIsYearValid] = useState(true)



  const validateInput = (e)=>{
    // {key}=object
    const {name,value} = e.target
    // logic to check number validation - regular expression: /^[0-9]+$/
    if(!!value.match(/^[0-9]*.?[0-9]+$/)){
      if(name==="principle"){
        setPrinciple(value)
        setIsPrincipleValid(true)
      }else if(name==="rate"){
        setRate(value)
        setIsRateValid(true)
      }else{
        setYear(value)
        setIsYearValid(true)
      }
    }else{
      if(name==="principle"){
        setPrinciple(value)
        setIsPrincipleValid(false)
      }else if(name==="rate"){
        setRate(value)
        setIsRateValid(false)
      }else{
        setYear(value)
        setIsYearValid(false)
      }
    }
  }

  const handleCalculate = (e) => {
    e.preventDefault();
    
    // Check if any of the input fields are empty
    if (!Principle || !rate || !year) {
      alert("Please Fill The Form Completely!!!");
    } else {
      setInterest(Principle * rate * year / 100);
    }
  };
  
  const handleReset = (e)=>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setIsPrincipleValid(true)
    setIsRateValid(true)
    setIsYearValid(true)
  }

  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
      <div style={{width:'600px'}} className='bg-light p-5 rounded'>
        <h1>Simple Intrest Calculator</h1>
        <p>Calculate Your Simple Intrest</p>
        <div style={{height:'150px'}} className="interest-card w-100 bg-warning mt-5 d-flex justify-content-center align-items-center flex-column text-light shadow rounded">
          <h1>₹ {' '} {interest}</h1>
          <p className='fw-bolder'>Total Simple Intrest</p>
        </div>
        <form className='mt-5' >
          <div className='mb-3'>
          <TextField id="outlined-basic1" label="₹ Principle Amount" variant="outlined" className='w-100' value={Principle ||""} name='principle' onChange={(e)=>validateInput(e)}/>
          </div>
          {
            !isPrincipleValid &&
            <div className='mb-3 text-danger fw-bolder'>
              *Invalid User Input
            </div>
          }
          <div className='mb-3'>
          <TextField id="outlined-basic2" label="Rate of Intrest (p.a) %" variant="outlined" className='w-100' value={rate || ""} name='rate' onChange={(e)=>validateInput(e)}/>
          </div>
          {
            !isRateValid &&
            <div className='mb-3 text-danger fw-bolder'>
              *Invalid User Input
            </div>
          }

          <div className='mb-3'>
          <TextField id="outlined-basic3" label="Time Period(yr)" variant="outlined" className='w-100' value={year || ""} name='year' onChange={(e)=>validateInput(e)}/>
          </div>
          {
            !isYearValid &&
            <div className='mb-3 text-danger fw-bolder'>
              *Invalid User Input
            </div>
          }

          <Stack direction="row" spacing={2}>
              <Button variant="contained" style={{height:'70px',width:'50%'}} disabled={isPrincipleValid && isRateValid && isYearValid?false:true} onClick={handleCalculate}>CALCULATE</Button>
              <Button variant="outlined" style={{height:'70px',width:'50%'}} onClick={handleReset}>RESET</Button>
          </Stack>
        </form>
      </div>
      
    </div>
  );
}

export default App;

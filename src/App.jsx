import { TextField, Stack, Button } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {
  const [interest, setInterest] = useState(0)
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)

  const [isprincipleInvalid, setisprincipleInvalid] = useState(false)
  const [isRateInvalid, setisRateInvalid] = useState(false)
  const [isYearInvalid, setisYearInavlid] = useState(false)

  const userInputValidation = (inputTag) =>{
    // used to validate user inputs
    const {name,value} = inputTag
    console.log(name,value);
    // check number pattern in value 
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    console.log(!!value.match(/^\d*\.?\d+$/));
    if (name=="principle"){
      setPrinciple(value)
      !!value.match(/^\d*\.?\d+$/) ? setisprincipleInvalid(false) : setisprincipleInvalid(true)
    }else if(name=="rate"){
      setRate(value)
      !!value.match(/^\d*\.?\d+$/) ? setisRateInvalid(false) : setisRateInvalid(true)
    }else if(name=="year"){
      setYear(value)
      !!value.match(/^\d*\.?\d+$/) ? setisYearInavlid(false) : setisYearInavlid(true)
    }
  }

  const handleCalculate =()=>{
    if(principle && rate && year){
      setInterest(principle*rate*year/100)
    }else{
      alert("Please fill the form completely!!!")
    }
  }

  const handleReset = () =>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setisprincipleInvalid(false)
    setisRateInvalid(false)
    setisYearInavlid(false)
  }

  return (
    <div className='d-flex justify-content-center align-items-center bg-dark' style={{ minHeight: '100vh' }}>
      <div className='bg-light rounded p-5' style={{ width: '600px' }}>
        <h3>Simple Interest Calculator</h3>
        <p>Calculate your simple interest easily</p>
        <div className='d-flex flex-column justify-content-center align-items-center bg-warning shadow rounded p-3 text-light'>
          <h1>₹ {interest}</h1>
          <p className="fw-bolder">Total Simple Interest</p>
        </div>
        {/* form */}
        <form className='mt-3'>
          {/* principle input div */}
          <div className='mb-3'>
            <TextField value={principle || ""} onChange={e=>userInputValidation(e.target)} name='principle' className='w-100' id="outlined-principle" label="₹ Principle Amount" variant="outlined" />
          </div>
          {/* error msg for principle amount */}
          {
            isprincipleInvalid && <div className="mb-3 fw-bolder text-danger">Invalid Principle Amount</div>

          }

          <div className='mb-3'>
            <TextField value={rate || ""} onChange={e=>userInputValidation(e.target)} name='rate' className='w-100' id="outlined-rate" label="Rate of Interest (%)" variant="outlined" />
          </div>
          {/* error msg for rate of interest */}
          {
            isRateInvalid && <div className="mb-3 fw-bolder text-danger">Invalid Rate</div>

          }

          <div className='mb-3'>
            <TextField value={year || ""} onChange={e=>userInputValidation(e.target)} name='year' className='w-100' id="outlined-year" label="Time Period (Yr)" variant="outlined" />
          </div>
          {/* error msg for year */}
          {
            isYearInvalid && <div className="mb-3 fw-bolder text-danger">Invalid Year</div>

          }

          <Stack direction="row" spacing={2}>
            <Button onClick={handleCalculate} disabled={isprincipleInvalid || isRateInvalid || isYearInvalid} className='bg-dark' style={{ width: '50%', height: '70px' }} variant="contained">CALCULATE</Button>
            <Button onClick={handleReset} className='border border-dark text-dark' style={{ width: '50%', height: '70px' }} variant="outlined">RESET</Button>
          </Stack>

        </form>
      </div>
    </div>
  )
}

export default App

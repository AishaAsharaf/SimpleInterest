
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  const[principle , setPrinciple] = useState(0)
  const[rate , setRate] = useState(0)
  const[time , setTime] = useState(0)
  const[interest , setInterest] = useState(0)


  /* condiional rendering to check whether input is a number or not */
  const[isPrinciple , setIsPrinciple] = useState(true)
  const[isRate , setIsRate] = useState(true)
  const[isTime , setIsTime] = useState(true)
  


  const validate =(e) =>{
    /* console.log(e.target.value);
    console.log(e.target.name); */
    
    let value = e.target.value
    let name = e.target.name

    console.log(!!value.match(/^[0-9]*$/));

    if(!!value.match(/^[0-9]*$/)){
      if(e.target.name=='principle'){
        setPrinciple(value)
        setIsPrinciple(true)
      }
      else if(e.target.name=='rate'){
        setRate(value)
        setIsRate(true)
      }
      else{
        setTime(value)
        setIsTime(true)
      }

    }
    else{
      if(e.target.name=='principle'){
       /*  setPrinciple(value) */
        setIsPrinciple(false)
      }
      else if(e.target.name=='rate'){
        /* setRate(value) */
        setIsRate(false)
      }
      else{
        /* setTime(value) */
        setIsTime(false)
      }

    }
    

  }

  const isRefresh = ()=>{
    setPrinciple(0)
    setRate(0)
    setTime(0)
    setIsPrinciple(true)
    setIsRate(true)
    setIsTime(true)
    setInterest(0)
  }


  const calculate = () => {
    setInterest((principle*rate*time)/100)
  }

  /* console.log("principle",principle);
  console.log("rate",rate);
  console.log("time",time); */
  

  return (
    <div className='d-flex justify-content-center align-items-center' style={{width:"100%", height:"100vh"}}>
      <div className='bg-light rounded p-4' style={{width:"490px"}}>
        <h1>Simple Interest App</h1>
        <p>Calculate your Simple Interest Easily</p>

        <div className='bg-warning flex-column d-flex justify-content-center align-items-center  mt-4 rounded shadow p-3'>
          <h2 className='fs-1 fw-3'>₹ {interest}</h2>
          <p>Total Simple Interest</p>


        </div>

        <form action="" className='mt-5'>
          <div className='mb-3'>
             <TextField id="outlined-basic" value={principle || ""} name='principle'  label="Principle Amount" variant="outlined" className='w-100' onChange={(e) => validate(e)} />
             {!isPrinciple &&
              <p className='text-danger'>*Invalid Input</p>}
          </div>
          <div className='mb-3'>
             <TextField id="outlined-basic"  value={rate || ""} name='rate'   label="Rate of Interest (p.a%)" variant="outlined" className='w-100' onChange={(e) => validate(e)}/> 
             {!isRate &&
              <p className='text-danger'>*Invalid Input</p>}
          </div>
          <div className='mb-3'>
             <TextField id="outlined-basic"  value={time || ""} name='time' label="Year (Yr)" variant="outlined" className='w-100' onChange={(e) => validate(e)}/> 
             {!isTime &&
              <p className='text-danger'>*Invalid Input</p>}
          </div>

          <div className='d-flex justify-content-between w-100 mt-4'>
            <Button variant="contained" color="success" style={{width:"200px",height:"60px"}} disabled={isPrinciple && isRate && isTime? false:true} onClick={calculate}>Calculate</Button>
            <Button variant="outlined" style={{width:"200px",height:"60px"}} onClick={isRefresh}>Reset</Button>
          </div>
         

        </form>

      </div>
      
    </div>
  )
}


export default App

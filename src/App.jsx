import { useState } from 'react'
import reactLogo from './assets/react.svg'
import useCurrency from './hooks/useCurrency'

import './App.css'

function App() {
  let response = useCurrency("usd")

  return (
    <>
    <h1 className='text-red-700 text-center font-bold text-2xl'>Currency Converter</h1>
    <h1 className='text-blue-700 text-center font-bold text-2xl'>Value of usd to Inr: {response['inr']}</h1>
    </>
  )
}

export default App
 

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import useCurrency from './hooks/useCurrency'

import './App.css'

function App() {
  let response = useCurrency("usd")

  return (
    <>
    <h1>Value of usd to Inr: {response['inr']}</h1>
    </>
  )
}

export default App

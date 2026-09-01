import { useState } from 'react'
import reactLogo from './assets/react.svg'
import useCurrency from './hooks/useCurrency'
import InputBox from './components/InputBox'

import './App.css'

function App() {
  const [Amount,set_Amount]=useState(null)
  const [converted_Amount,set_ConvertedAmount]=useState(0)
  const [to,setTo] =useState("inr")
  const [from,setFrom] =useState("usd")
  let response = useCurrency(from)
  
  let currencies=Object.keys(response)

const swap =()=>{
  setFrom(to)
  setTo(from)
}


const convert=()=>{
  set_ConvertedAmount(Amount*response[to])
}


  return (
    <>
   
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://www.cutoutimage.com/wp-content/uploads/2022/02/What-is-Black-and-white-photography.webp')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                currency_list={currencies}
                                selected_currency={from}
                                Amount={Amount}
                                onAmountChange={(amount)=>{
                                  set_Amount(amount)
                                }}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                currency_list={currencies}
                                selected_currency={to}
                                Amount={converted_Amount}
                                onCurrencyChange={(currency)=>(setTo(currency))}
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
 

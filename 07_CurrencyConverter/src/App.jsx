import { useState } from 'react'
import {Input} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  // console.log(options);
  // console.log(typeof(options));
  

  const swap = () =>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convertCurrency = ()=>{
    setConvertedAmount(amount * currencyInfo[to])
  }


  return (
    <>
    <div 
    className='w-full h-screen flex flex-col  bg-cover bg-no-repeat'
    style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1651340981821-b519ad14da7c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y3VycmVuY3klMjBleGNoYW5nZXxlbnwwfHwwfHx8MA%3D%3D')`
    }}
    >
        <h1
      className='flex justify-center mt-24 text-3xl text-blue-700 font-bold'
      >Currency Converter</h1>
      <div 
      className='flex flex-col justify-center items-center mt-4 text-xl'
      
      >
        <form 
          onSubmit={(e) => {e.preventDefault()
                          convertCurrency()
                    }}
          >
          <Input 
            label={"From"} 
              amount={amount} 
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectedCurrency={from}
            onAmountChange={(amount) => setAmount(amount)}
          />
          <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-4 py-1"
                            onClick={swap}
                        >
                            swap
                        </button>
          </div>
          <Input 
            label={"To"} 
            amount={convertedAmount} 
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectedCurrency={to}
            amountDisabled
          />
          <div
          className='flex w-full justify-center'
          >
              <button 
              type='submit'
              className="border-white rounded-md bg-blue-600 text-white px-4 py-2 mt-4"
              >Convert {from} to {to}</button>
          </div>
          <footer
          className='text-sm flex justify-center mt-8 text-white' 
          >Created by hmaazul @ All rights reserved</footer>
        </form>
        
      </div>
    </div>
      
      
    </>
  )
}

export default App

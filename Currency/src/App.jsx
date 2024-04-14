import { useState } from 'react'
import './App.css'
import InputBox from './Components/Input'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {


  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertAmount, setConvertAmount] = useState(0)
  const currencyInfo  = useCurrencyInfo(from)

  return (
    <>hello world</>
  )
}

export default App

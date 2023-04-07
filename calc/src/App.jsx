import React, { useState } from 'react'
import Top from './components/Top'
import Values from './components/Values';

const App = () => {
  const [prevValue, setPrevValue] = useState('')
  const [currValue, setCurrValue] = useState('')
  const [operation, setOperation] = useState(undefined)
  const [activeButton, setActiveButton] = useState("low");

  return (
    <div className={`flex justify-center h-screen items-center ${activeButton === 'low' ? 'bg-slate-500' : activeButton === 'medium' ? 'bg-orange-50' : 'bg-purple-950'}`}>
      
    <div className="w-[450px] h-[500px] bg-transparent">
      <Top prevValue={prevValue} currValue={currValue} activeButton={activeButton} setActiveButton={setActiveButton} />
    
     <Values
      setCurrValue={setCurrValue}
      setOperation={setOperation}
      setPrevValue={setPrevValue}
      prevValue={prevValue}
      currValue={currValue}
      operation={operation}
      activeButton={activeButton}
     />
    </div>
  </div>
  )
}

export default App



import React, { useState } from 'react'

const Values = (
    {
        setCurrValue,
        setOperation,
        setPrevValue,
        prevValue,
        currValue,
        operation,
        activeButton
    }
) => {
    const numbers = `font-bold md:text-xl sm:text-md drop-shadow-md rounded-xl shadow-inner px-4 py-2 ${activeButton === 'fast' ? 'text-yellow-500 bg-purple-900 hover:bg-purple-600' : 'text-slate-700 bg-stone-200 hover:bg-white'}`
    const numbersDel = `font-bold bg-slate-500 md:text-xl sm:text-md text-white drop-shadow-md rounded-xl shadow-inner px-4 py-2 ${activeButton === 'fast' ? 'bg-purple-900 hover:bg-purple-400' : activeButton === 'medium' ? 'hover:bg-cyan-400' : 'hover:bg-indigo-300'}`
    const numbersEnd1 = `col-span-2 bg-slate-500 text-white font-bold md:text-xl sm:text-md rounded-xl shadow-inner px-4 py-2 ${activeButton === 'fast' ? 'hover:bg-purple-400' : activeButton === 'medium' ? 'hover:bg-cyan-400' : 'hover:bg-indigo-300'}`
    const numbersEnd2 = ' col-span-2 bg-orange-600 text-slate-900 font-extrabold text-xl sm:text-md rounded-xl hover:bg-white shadow-inner px-4 py-2'

    const handleSubmit = (e) => {
        const element = e.target;
        if (element.hasAttribute('data-number')) {
            if (element.textContent === '.' && currValue.includes('.')) return;
            const newElem = currValue.toString() + element.textContent.toString()
            setCurrValue(newElem)
        }

        if (element.hasAttribute('data-delete')) {
            setCurrValue((prev) => prev.toString().slice(0, -1))

        }

        if (element.hasAttribute('data-operation')) {
            if (currValue === '') return
            if (prevValue !== '') {
                compute()
            }
            setOperation(element.textContent)
            setPrevValue(currValue)
            setCurrValue('')
        }

        if (element.hasAttribute('data-equals')) {
            let computation
            const prev = parseFloat(prevValue)
            const curr = parseFloat(currValue)
            if (isNaN(prev) || isNaN(curr)) return

            switch (operation) {
                case '+':
                    computation = prev + curr
                    break;
                case "-":
                    computation = prev - curr
                    break;
                case '*':
                    computation = prev * curr
                    break;
                case '/':
                    computation = prev / curr
                    break;
                default:
                    return
            }
            setCurrValue(computation)
            setOperation(undefined)
            setPrevValue('')

        }

        if (element.hasAttribute('data-all-clear')) {
            setPrevValue('')
            setCurrValue('')
            setOperation(undefined)

        }
    }

    return (
        <div className='p-2'>
            <div className='grid grid-cols-4 rounded-lg gap-3 bg-slate-700 p-5'>
                <button onClick={handleSubmit} className={numbers} data-number>7</button>
                <button onClick={handleSubmit} className={numbers} data-number>8</button>
                <button onClick={handleSubmit} className={numbers} data-number>9</button>
                <button onClick={handleSubmit} className={numbersDel} data-delete>DEL</button>
                <button onClick={handleSubmit} className={numbers} data-number>4</button>
                <button onClick={handleSubmit} className={numbers} data-number>5</button>
                <button onClick={handleSubmit} className={numbers} data-number>6</button>
                <button onClick={handleSubmit} className={numbers} data-operation>+</button>
                <button onClick={handleSubmit} className={numbers} data-number>1</button>
                <button onClick={handleSubmit} className={numbers} data-number>2</button>
                <button onClick={handleSubmit} className={numbers} data-number>3</button>
                <button onClick={handleSubmit} className={numbers} data-operation>-</button>
                <button onClick={handleSubmit} className={numbers} data-number>.</button>
                <button onClick={handleSubmit} className={numbers} data-number>0</button>
                <button onClick={handleSubmit} className={numbers} data-operation>/</button>
                <button onClick={handleSubmit} className={numbers} data-operation>*</button>
                <button onClick={handleSubmit} className={numbersEnd1} data-all-clear>RESET</button>
                <button onClick={handleSubmit} className={numbersEnd2} data-equals>=</button>
            </div>

        </div>
    )
}

export default Values
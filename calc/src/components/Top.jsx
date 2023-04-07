import React from 'react'
import Button from './Button'

const Top = ({prevValue, currValue, activeButton, setActiveButton}) => {
    return (
        <div className='flex flex-col justify-between gap-2 p-2 bg-transparent'>
            <div className='w-full flex justify-between p-1'>
                <div className={`font-bold text-2xl 
                    ${activeButton === 'low' ? 'text-white' : activeButton === 'medium' ? 'text-black' : 'text-yellow-400'}`
                    }>
                    <h1>calc</h1>
                </div>
                <div className={`flex items-end gap-2 font-bold text-xs
                        ${activeButton === 'low' ? 'text-white' : activeButton === 'medium' ? 'text-black' : 'text-yellow-400'}
                    `}>
                    <div>
                        <h3>THEME</h3>
                    </div>
                    <div className='flex flex-col items-center gap-2'>
                        <div className='flex gap-0.5'>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                        </div>
                        <Button activeButton={activeButton} setActiveButton={setActiveButton} />
                    </div>
                </div>
            </div>

            <div className={`rounded-md w-full text-right h-[90px] p-2 ${activeButton === 'low' ? 'bg-slate-800 text-white' : activeButton === 'medium' ? 'bg-white' : 'bg-purple-800 text-yellow-400'}`}>
                <div className='text-slate-400 font-semibold text-xl' data-previous-operand>{prevValue}</div>
                <div className='font-bold text-4xl' data-current-operand>{currValue}</div>
            </div>
        </div>
    )
}

export default Top
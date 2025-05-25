import { useId } from "react";
import React from 'react';

function Input(
    {
        className="",
        label,
        amount,
        currencyOptions=[],
        onAmountChange,
        onCurrencyChange,
        selectedCurrency = "usd",
        amountDisabled = false,
        currecyDisabled = false
    }
)
{
    const amountInputId = useId()
    return (
        <div
        className={`bg-white border-2 rounded-lg w-full max-w-lg flex py-4 ${className}`}
        >
            <div className='w-1/2 px-4 py-2'>
                <label htmlFor={amountInputId}
                className="text-gray-500"
                >{label}</label>

                <input type='number'
                        id={amountInputId}
                        value={amount}
                        
                        className="w-full text-black mt-2"
                        placeholder='Amount'
                        disabled={amountDisabled}
                        onChange={ (e) => onAmountChange && onAmountChange(Number(e.target.value))}  // && added for checking 
                ></input>
                
            </div>
            <div className='w-1/2 flex flex-col items-end px-4 py-2'>
                <label className='text-gray-500 mb-2'>Currency Type</label>
                <select
                value={selectedCurrency}
                onChange={ (e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                disabled={currecyDisabled}
                >
                    {currencyOptions.map( (currency) => (
                        <option key={currency} value={currency}>
                            {currency}                                                       
                        </option>
                    )
                    )}
                    
                </select>
            </div>
            
        </div>
    );
}

export default Input;
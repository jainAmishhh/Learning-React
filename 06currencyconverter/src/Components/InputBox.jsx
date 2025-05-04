import React, { useId } from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  selectedCurrency = "usd",
  currencyOption = [],
  amountDisabled = false,
  currecnyDisabled = false,
  className = ""
}) => {
  const id = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className='w-1-2'>
        <label 
            htmlFor={id}
            className='text-black/40 mb-2 inline-block'
        >{label}</label>
        <input 
            id={id}
            type="number" 
            min={0}
            className="outline-none w-full bg-transparent py-1.5"
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
            disabled={amountDisabled}
            placeholder='Amount'
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select 
            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
            value={selectedCurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={currecnyDisabled}
        >
           {
                currencyOption.map((currency) => (
                    <option key={currency} value={currency}>{currency}</option>
                ))
            }
        </select>
      </div>
    </div>
  );
};

export default InputBox;


// import React, { useId } from 'react'

// const InputBox = ({
//     label,
//     amount,
//     onAmountChange,
//     onCurrencyChange,
//     selectedCurrency = "usd",
//     currencyOption = [],
//     currecnyDisabled = false,
//     amountDisabled = false,
//     className = ""
// }) => {

//   const id = useId();
//   return (
//     <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
//         {/* this div is for amount part specifically for 'from' section */}
//         <div className='w-1-2'>
//             <label 
//                 htmlFor={id}
//                 className='text-black/40 mb-2 inline-block'
//             > {label} </label>
//             <input 
//                 id={id}
//                 type="number"
//                 min="0"
//                 className='outline-none w-full bg-transparent py-1.5'
//                 value={amount}
//                 placeholder='Amount'
//                 disabled = {amountDisabled}
//                 onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
//             />
//         </div>
//         <div className='w-1/2 flex flex-wrap justify-end text-right'>
//             <p className='text-black/40 mb-2 w-full'>Currency Type</p>
//            <select 
//             className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
//             value={selectedCurrency}
//             disabled={currecnyDisabled}
//             onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
//            >
//             {
//                 currencyOption.map((currency) => (
//                     <option key={currency} value={currency}>{currency}</option>
//                 ))
//             }
//            </select> 
//         </div>
//     </div>
//   )
// }

// export default InputBox
import React from 'react'
import { TextField } from '@mui/material'

export default function CurrencyRow(props) {
  const {
    currencyOptions,
    selectedCurrency,
    // onChangeCurrency,
    onChangeAmount,
    amount
  } = props
  return (
    <div style={{ marginTop: '1em' }}>
      <TextField
        id={selectedCurrency}
        label={currencyOptions[0]}
        value={amount}
        type="text"
        variant="outlined"
        fullWidth
        onChange={e => onChangeAmount(e)}
      ></TextField>

      {/* <input
        type="number"
        className="input"
        value={amount}
        onChange={onChangeAmount}
      />
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select> */}
    </div>
  )
}

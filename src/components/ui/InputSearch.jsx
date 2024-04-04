// src/components/ui/InputSearch.jsx
import React from 'react'
import Input from './Input'
import { ReactComponent as LoupeIcon } from '../../assets/icons/loupe.svg'

const InputSearch = ({ value, onChange, placeholder }) => {
  return (
    <div className="input-search-container">
      <Input
        type="search"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <LoupeIcon className="loupe-icon" />
    </div>
  )
}

export default InputSearch

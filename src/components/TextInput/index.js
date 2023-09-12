import React from 'react'

const Input = ({value, placeholder, onChange}) => {
  return (
    <div>
    <input type='text'
        value={value}
        placeholder={placeholder}
        onChange={onChange}
    />
      
    </div>
  )
}

export default Input

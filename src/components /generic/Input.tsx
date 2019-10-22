import React, { ChangeEvent } from 'react';

type Props = {
  id?: string,
  value?: any;
  type?: string;
  name?: string;
  placeholder?: string;
  className?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  handleOnChange: (event: any) => void
}

const Input = ({ className, placeholder, value, type, handleOnChange }: Props) => {

  return (
    <input
      onChange={handleOnChange}
      className={className}
      type={type}
      placeholder={placeholder}
      value={value}
    />
  )
}
export default Input;
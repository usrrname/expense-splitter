import React, { ChangeEvent } from 'react';

type Props = {
  id?: string,
  value?: any;
  type?: string;
  name?: string;
  placeholder?: string;
  className?: string;
  onFocus?: (event: FocusEvent) => void,
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  handleOnChange: (event: any) => void,
  handleFocus: (event: any) => void
}

const Input = ({ className, name, placeholder, value, type, handleOnChange, handleFocus }: Props) => {
  return (
    <input
      onChange={handleOnChange}
      onFocus={handleFocus}
      className={className}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
    />
  )

}
export default Input;
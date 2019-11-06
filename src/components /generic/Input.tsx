import React, { ChangeEvent, SyntheticEvent, FocusEventHandler } from 'react';

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
}

const Input = ({ className, name, placeholder, value, type, handleOnChange }: Props) => {
  return (
    <input
      onChange={handleOnChange}
      className={className}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
    />
  )

}
export default Input;
import React, { MouseEventHandler, ButtonHTMLAttributes } from 'react';

type Props = {
  id?: string,
  type?: 'submit' | 'reset' | 'button';
  className?: string,
  onClick: (event: any) => void,
  value?: string
}

const Button = ({ className, type, value, onClick }: Props) => {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
    >{value}</button>
  )

}
export default Button;

import React, { ChangeEvent } from 'react';

type Props = {
  id: string,
  name: string
  income: number,
  onClick: (event: any) => void,
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
}

const UserField = ({ onChange, income, onClick, id }: Props) => {

  return (
    <li className='user-item' data-id={id}>
      <label>Name</label>
      <input onChange={onChange} type="text" placeholder="Enter your name" name="user-name" />
      <label>Income</label >
      <input onChange={onChange} name="user-income" type="number" size={income}></input>
      <button onClick={onClick} type="button"> x </button>
    </li>
  )
}
export default UserField;
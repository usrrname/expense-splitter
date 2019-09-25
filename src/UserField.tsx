
import React, { ChangeEvent, MouseEventHandler } from 'react';

type Props = {
  id: string,
  name: string
  income: number,
  onClick?: () => void,
  deleteUser: (id: string) => void,
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
}

const UserField = ({ onChange, income, deleteUser, onClick, name, id }: Props) => {

  return (
    <li className='user-item' data-id={id}>
      <label>Name</label>
      <input onChange={onChange} type="text" placeholder="Enter your name" name={name} />
      <label>Income</label >
      <input onChange={onChange} name="user-income" type="number" size={income}></input>
      <button onClick={onClick}> x </button>
    </li>
  )
}
export default UserField;
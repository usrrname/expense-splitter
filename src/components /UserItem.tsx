
import React, { ChangeEvent } from 'react';
import Input from './generic/Input';
import { User } from '../types/types';

type Props = {
   id: string,
  // name: string,
  // // income: number,
  value: User,
  onClick: (event: any) => void,
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const UserItem = ({ onClick, onChange, id, value }: Props) => {
  return (
    <li className='user-item' data-id={id}>
      <label>Name</label>
      <Input type="text" name="user-name" placeholder="Enter Your Name" onChange={onChange} value={value.name} />
      <label>Income</label >
      <Input type="number" placeholder="0" onChange={onChange} value={value.income} />
      <button onClick={onClick} type="button"> x </button>
    </li>
  )
}

export default UserItem;
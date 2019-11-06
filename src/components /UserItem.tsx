
import React, { SyntheticEvent } from 'react';
import Input from './generic/Input';
import { User } from '../types/types';

type Props = {
  value?: any,
  id: string,
  user: User,
  onClick: (event: any) => void,
  handleOnChange: (data: any) => void
}

const UserItem = ({ value, onClick, user, id, handleOnChange }: Props) => {

  return (
    <li className='user-item' id={id}>
      <label>Name</label>
      <Input type="text"
        name="user-name"
        placeholder="Enter Your Name"
        value={value}
        handleOnChange={handleOnChange}
      />

      <label>Income</label >
      <Input
        type="number"
        placeholder="0"
        value={value}
        handleOnChange={handleOnChange}
      />

      <button onClick={onClick} type="button"> x </button>
    </li>
  )
}

export default UserItem;
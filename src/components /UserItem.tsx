
import React from 'react';
import Input from './generic/Input';
import { User } from '../types/types';

type Props = {
  value?: any,
  id: string,
  user: User,
  onClick: (event: any) => void,
  handleOnChange: (data: any) => void
}

const UserItem = ({ value, onClick, user, handleOnChange }: Props) => {

  return (
    <fieldset className='user-item' id={user.id}>
      <label>Name</label>
      <Input
        type="text"
        name="name"
        placeholder="Enter Your Name"
        value={value}
        handleOnChange={handleOnChange}
      />

      <label>Income</label >
      <Input
        type="number"
        name="income"
        placeholder="Enter your income"
        value={value}
        handleOnChange={handleOnChange}
      />

      <button onClick={onClick} type="button"> x </button>
    </fieldset>
  )
}

export default UserItem;
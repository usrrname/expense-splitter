
import React, { ChangeEvent } from 'react';
import Input from './generic/Input';
import { User } from '../types/types';

type Props = {
  id: string,

  user: User,
  onClick: (event: any) => void,
  handleOnChange: (data: any) => void
}

const UserItem = ({ onClick, user, id, handleOnChange }: Props) => {

  return (
    <li className='user-item' id={id}>
      <label>Name</label>
      <Input type="text" name="user-name" placeholder="Enter Your Name" value={user.name} handleOnChange={handleOnChange} /> 
      <label>Income</label >
       <Input type="number" placeholder="0" value={user.income} handleOnChange={handleOnChange} />  
      <button onClick={onClick} type="button"> x </button>
    </li>
  )
}

export default UserItem;

import React from 'react';
import Input from './generic/Input';
import { User } from '../types/types';
import Button from 'react-bootstrap/Button';

type Props = {
  value?: any,
  id?: string,
  user: User,
  onDeleteUser: (event: any) => void,
  handleOnChange: (event: any) => void,
  handleFocus: (event: any) => void
}

const UserItem = ({ value, user, onDeleteUser, handleOnChange, handleFocus }: Props) => {
  return (
    <div>
      <fieldset className='user-item' id={user.id}>
        <label>Name</label>
        <Input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={value}
          handleFocus={handleFocus}
          handleOnChange={handleOnChange}
        />

        <label>Income</label >
        <Input
          type="number"
          name="income"
          placeholder="Enter your income"
          value={value}
          handleFocus={handleFocus}
          handleOnChange={handleOnChange}
        />
        <Button onClick={onDeleteUser} variant="light">x </Button>
      </fieldset>
    </div>
  )
}

export default UserItem;
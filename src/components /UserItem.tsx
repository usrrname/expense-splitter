import { Badge } from 'react-bootstrap';
import Input from './generic/Input';
import React from 'react';
import { User } from '../types/types';

type Props = {
  value?: any,
  id?: string,
  user: User,
  onDeleteUser: (event: any ) => void,
  handleOnChange: (event: any) => void,
  handleFocus: (event: any) => void
}

const UserItem = ({ value, user, onDeleteUser, handleOnChange, handleFocus }: Props) => {

  return (
    <fieldset className='user-item'>
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

      <Badge id={user.id} onClick={onDeleteUser} variant="secondary">
        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </Badge>
    </fieldset>
  )
}

export default UserItem;
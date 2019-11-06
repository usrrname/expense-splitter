import React, { ChangeEvent, SyntheticEvent, FocusEventHandler } from 'react';
import { User } from '../types/types';
import UserField from './UserItem';

type Props = {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
  users: User[],
  onAddUser: () => void,
  onClick: (event: any) => void,
  handleOnChange: (event: any) => void
}

const UserList = ({ onAddUser, handleOnChange, users, onClick}: Props) => {
  const userItems = users.map((user: User) =>
    <UserField
      user={user}
      key={user.id}
      id={user.id}
      handleOnChange={handleOnChange}
      onClick={onClick}
    />
  )

  const renderUsers = () => {
    return (
      <ul className="user-list">
        {userItems}
        <button onClick={onAddUser} type="button">+ Add User</button>
      </ul>
    )
  }

  return (
    renderUsers()
  )
}
export default UserList;
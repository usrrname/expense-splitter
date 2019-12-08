import React from 'react';
import { User } from '../types/types';
import UserItem from './UserItem';

type Props = {
  users: User[],
  onAddUser: () => void,
  onDeleteUser: (event: any) => void,
  handleOnChange: (event: any) => void
}

const UserList = ({ onAddUser, onDeleteUser, handleOnChange, users }: Props) => {
  const userItems = users.map((user: User) =>
    <UserItem
      user={user}
      key={user.id}
      id={user.id}
      handleOnChange={handleOnChange}
      onClick={onDeleteUser}
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
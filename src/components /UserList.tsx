import React from 'react';
import { User } from '../types/types';
import UserItem from './UserItem';
import Button from 'react-bootstrap/Button';

type Props = {
  users: User[],
  onAddUser: () => void,
  onDeleteUser: (event: any) => void,
  handleOnChange: (event: any) => void
}

const UserList = ({ onAddUser, onDeleteUser, handleOnChange, users }: Props) => {
  const userItems = users.map((user: User) =>
    <div>
      <UserItem
        user={user}
        key={user.id}
        id={user.id}
        handleOnChange={handleOnChange}
        onDeleteUser={onDeleteUser}
      />
    </div>
  )

  const renderUsers = () => {
    return (
      <ul className="user-list">
        {userItems}
        <Button type="button" onClick={onAddUser} value="+ Add User" />
      </ul>
    )
  }

  return (
    renderUsers()
  )
}
export default UserList;
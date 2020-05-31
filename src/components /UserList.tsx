import React from 'react';
import { User } from '../types/types';
import UserItem from './UserItem';
import Button from 'react-bootstrap/Button';

type Props = {
  users: User[],
  onAddUser: () => void,
  onDeleteUser: (event: any) => void,
  handleOnChange: (event: any) => void
  handleFocus: (event: any) => void
}

const UserList = ({ onAddUser, onDeleteUser, handleOnChange, handleFocus, users }: Props) => {
  const userItems = users.map((user: User) => {
    return (
      <div>
        <UserItem
          key={user.id}
          user={user}
          handleOnChange={handleOnChange}
          handleFocus={handleFocus}
          onDeleteUser={onDeleteUser}
        />
      </div>
    )
  })

  const renderUsers = () => {
    return (
      <ul className="user-list">
        {userItems}
        <Button type="button" onClick={onAddUser} variant="outline-primary">+ Add User</Button>
      </ul>
    )
  }

  return (
    renderUsers()
  )
}
export default UserList;
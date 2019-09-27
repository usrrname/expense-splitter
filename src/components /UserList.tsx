
import React, { ChangeEvent } from 'react';
import { User } from '../types/types';
import UserField from './UserItem';

type Props = {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
  users: User[],
  onAddUser: () => void,
  onClick: (event: any) => void,
}

const UserList = ({ onAddUser, users, onClick }: Props) => {
  const userItems = users.map((user: User) =>
    <UserField
      key={user.id}
      id={user.id}
      value={user}
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
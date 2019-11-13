import React from 'react';
import { User } from '../types/types';
import UserItem from './UserItem';

type Props = {
  users: User[],
  addUser: () => void,
  deleteUser: (id: string) => void,
  handleOnChange: (event: any) => void
}

const UserList = ({ addUser, deleteUser, handleOnChange, users }: Props) => {
  const userItems = users.map((user: User) =>
    <UserItem
      user={user}
      key={user.id}
      id={user.id}
      handleOnChange={handleOnChange}
      onClick={deleteUser}
    />
  )

  const renderUsers = () => {
    return (
      <ul className="user-list">
        {userItems}
        <button onClick={addUser} type="button">+ Add User</button>
      </ul>
    )
  }

  return (
    renderUsers()
  )
}
export default UserList;
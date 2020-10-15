import Button from 'react-bootstrap/Button';
import React from 'react';
import { User } from '../types/types';
import UserItem from './UserItem';

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
      <>
        <ul className="user-list">
          {userItems}

          <Button type="button" onClick={onAddUser} variant="outline-primary" size="sm">
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
           Add User</Button>
        </ul>
      </>
    )
  }

  return (
    renderUsers()
  )
}
export default UserList;
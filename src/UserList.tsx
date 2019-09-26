
import React, { ChangeEvent } from 'react';
import { User } from './types/types';
import UserField from './UserField';

type Props = {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
  onClick: (event: any) => void,
  users: User[],
}

const UserList = ({ onChange, users, onClick }: Props) => {
  const userItems = users.map((user: User) =>
    <UserField
      onClick={onClick}
      key={user.id} id={user.id}
      income={user.income}
      name={user.name}
      onChange={onChange}
    />
  )

  const renderUsers = () => {
    return (
      <form>
        <ul className="user-list">
          {userItems}
        </ul>
      </form>
    )
  }

  return (
    renderUsers()
  )
}

export default UserList;
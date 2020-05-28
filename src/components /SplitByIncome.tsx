import React from 'react';
import { User } from '../types/types';
import Button from 'react-bootstrap/Button';

type Props = {
  users: User[],
  value: string,
  onClick: (event: any) => void
};

const SplitByIncome = ({ users, value, onClick }: Props) => {
  const paymentList = users.map(user =>
    <p>{user.name} pays {user.paymentAmount} </p>);

  return (
    <div>
      {paymentList}
      <Button
        variant="primary"
        onClick={onClick}
        value={value}>+ Add User</Button>
    </div>
  )

}

export default SplitByIncome;
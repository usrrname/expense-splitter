import React from 'react';
import { User } from '../types/types';
import Button from 'react-bootstrap/Button';

type Props = {
  users: User[],
  onClick: (event: any) => void
};

const SplitByIncome = ({ users, onClick }: Props) => {
  const paymentList = users.map(user =>
    <p>{user.name} pays {user.paymentAmount} </p>);

  return (
    <div>
      {paymentList}
      <Button
        variant="primary"
        onClick={onClick}>Split The Bill</Button>
    </div>
  )

}

export default SplitByIncome;
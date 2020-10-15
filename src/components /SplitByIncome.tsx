import Button from 'react-bootstrap/Button';
import React from 'react';
import { User } from '../types/types';

type Props = {
  users: User[],
  onClick: (event: any) => void
};

const SplitByIncome = ({ users, onClick }: Props) => {
  const paymentList = users.map((user) =>
    user.name && <p> {user.name} pays {user.paymentAmount} </p>
  );

  return (
    <div>
      { users.length < 2 && <div className='alert alert-info'>You need to enter 2 or more users for the splitter to work.
    </div>}

      {paymentList}

      <Button
        variant="primary"
        onClick={onClick}
        disabled={users.length < 2 || users.some(user => !user.income)}>
        Split The Bill</Button>
    </div>
  )

}

export default SplitByIncome;

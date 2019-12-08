import React from 'react';
import { User } from '../types/types';
import Button from './generic/Button';

type Props = {
  users: User[],
  value: string,
  onClick: (event: any) => void
};

const SortByIncome = ({ users, value, onClick }: Props) => {
  const payments = users.map(user =>
    <p>{user.name} pays {user.paymentAmount} </p>);

return(
  <Button
    className="btn"
    onClick={onClick}
    value={value} />
)
  }

export default SortByIncome;
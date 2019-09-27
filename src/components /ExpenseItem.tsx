import React from 'react';
import Input from './generic/Input';

type Props = {
  id: string,
  name: string,
  cost: number,
  onClick: (event: any) => void,
}

const ExpenseItem = ({ id, name, cost, onClick }: Props) => {

  return (
    <li className='expense-item' data-id={id}>
      <label>Item</label>
      <Input type="text" name="item-name" placeholder="Name of expense" value={name} />
      <label>Cost</label>
      <Input type="number" name="item-cost" placeholder="Amount" value={cost} />
      <button onClick={onClick} type="button"> x </button>
    </li>
  )
}

export default ExpenseItem;
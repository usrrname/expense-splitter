import React, { ChangeEvent, MouseEventHandler } from 'react';

type Props = {
  name: string,
  cost: number,
  onClick?: MouseEventHandler<void>;
  deleteItem: (id: string) => void,
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
}

const ExpenseItem = ({ cost, onChange, deleteItem }: Props) => {

  return (
    <li className='expense-item'>
      <label>Item</label><input onChange={onChange} type="text" name="item-name" placeholder="Name of expense"></input>
      <label>Cost</label><input onChange={onChange} type="number" name="item-cost" placeholder="Amount" size={cost}></input>
      <button onClick={() => deleteItem} type="button">x</button>
    </li>
  )
}

export default ExpenseItem;
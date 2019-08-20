import React from 'react';

type Props = {
  id?: string,
  name: string,
  cost: number,
  onChange?: (value: number | string) => void,
  onDeleteItem: (id: string) => void
}

const ExpenseItem = ({ id, name, cost, onChange, onDeleteItem }: Props) => {
  return (
    <div>
      <li key={id}>
        <label>Item</label><input value={name} type="text" placeholder="Name of expense" ></input>
        <label>Cost</label><input value={cost} type="number" placeholder="Amount"></input>
        <button onClick={() => onDeleteItem}>x</button>
      </li>
    </div>
  )
}

export default ExpenseItem;
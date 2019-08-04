import React from 'react';

type Props = {
  id?: string,
  name: string,
  cost: number,
  onChange?: (value: number| string) => void,
}

const ExpenseItem = ({id, name, cost, onChange}: Props) => {
  return (
    <div>
      <li key={id}>
            <label>Cost</label><input name="expense" type="number" placeholder="Amount"></input>

            <label>Item</label><input name="name" type="text" placeholder="Name of expense" ></input>
          </li>
      <button onClick={() => { }}> x </button>
    </div>
  )
}

export default ExpenseItem;
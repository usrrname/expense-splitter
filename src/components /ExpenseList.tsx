import React from 'react';
import { Item } from '../types/types';
import ExpenseItem from './ExpenseItem';

type Props = {
  items: Item[],
  addItem: () => void,
  deleteItem: (id: string) => void,
  handleOnChange: (event: any) => void
}

const ExpenseList = ({ items, addItem, deleteItem, handleOnChange }: Props) => {

  const listItems = items.map((item: Item) => (
    <ExpenseItem
      key={item.id}
      id={item.id}
      item={item}
      handleOnChange={handleOnChange}
      onClick={deleteItem}
    />
  ));
  return (<ul className='expense-list'>
    {listItems}
    <button onClick={addItem} type="button">
      + Add Item
    </button>
  </ul>
  )
}
export default ExpenseList;
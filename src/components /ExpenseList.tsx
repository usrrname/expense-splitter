import React from 'react';
import { Item } from '../types/types';
import ExpenseItem from './ExpenseItem';
import Button from 'react-bootstrap/Button';

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
    <Button onClick={addItem}>+ Add Item</Button>
  </ul>
  )
}
export default ExpenseList;
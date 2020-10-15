import Button from 'react-bootstrap/Button';
import ExpenseItem from './ExpenseItem';
import { Item } from '../types/types';
import React from 'react';

type Props = {
  items: Item[],
  addItem: () => void,
  deleteItem: (id: string) => void,
  handleOnChange: (event: any) => void,
  handleFocus: (event: any) => void
}

const ExpenseList = ({ items, addItem, deleteItem, handleOnChange, handleFocus }: Props) => {

  const listItems = items.map((item: Item) => (
    <ExpenseItem
      key={item.id}
      id={item.id}
      item={item}
      handleFocus={handleFocus}
      handleOnChange={handleOnChange}
      onClick={deleteItem}
    />
  ));
  return (
    <>
      <ul className='expense-list'>
        {listItems}
      </ul>
      <Button size="sm" onClick={addItem}>
        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg> Add Item</Button>
    </>
  )
}
export default ExpenseList;
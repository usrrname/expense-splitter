import React from 'react';
import ExpenseItem from './ExpenseItem';
import { Item } from '../types/types';

type Props = {
  items: Item[];
  onClick: (event: any) => void,
  onAddItem: () => void,
};

const ExpenseItemList = ({ items, onClick, onAddItem }: Props) => {

  const listItems = items.map((item: Item) => (
    <ExpenseItem
      key={item.id}
      id={item.id}
      name={item.name}
      cost={item.cost}
      onClick={onClick}
    />
  ));

  const renderList = () => {

    return (
      <ul className='expense-list'>
        {listItems}
        <button onClick={onAddItem} type="button">
          + Add Item
          </button>
      </ul>
    );
  };
  return (
    renderList()
  )
}

export default ExpenseItemList;

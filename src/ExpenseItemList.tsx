import React, { ChangeEvent } from 'react';
import ExpenseItem from './ExpenseItem';
import { Item } from './types/types';

type Props = {
  items: Item[];
  onItemChange: (event: any) => void,
  onClick: (event: any) => void,
};

const ExpenseItemList = ({ items, onItemChange, onClick }: Props) => {

  const listItems = items.map((item: Item) => (
    <ExpenseItem
      key={item.id} id={item.id}
      name={item.name}
      cost={item.cost}
      onClick={onClick}
      onItemChange={onItemChange}
    />
  ));

  const renderList = () => {
    return (
      <form>
        <ul className='expense-list'>{listItems}</ul>
      </form>
    );
  };

  return renderList();
};

export default ExpenseItemList;

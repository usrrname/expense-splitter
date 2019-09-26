import React, { ChangeEvent, Component } from 'react';
import ExpenseItem from './ExpenseItem';
import { Item } from './types/types';

type Props = {
  items: Item[];
  onClick: (event: any) => void,
};

const ExpenseItemList =(props:Props) => {
  const {items} = props;
  const listItems = items.map((item: Item) => (
    <ExpenseItem
      key={item.id} id={item.id}
      name={item.name}
      cost={item.cost}
      onClick={props.onClick}
    />
  ));

  const renderList = () => {
    return (
      <form>
        <ul className='expense-list'>{listItems}</ul>
      </form>
    );
  };
  return(
    renderList()
  )
}

export default ExpenseItemList;

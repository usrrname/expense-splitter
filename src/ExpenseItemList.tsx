import React, { ChangeEvent } from 'react';
import ExpenseItem from './ExpenseItem';
import { Item } from './types/types';

type Props = {
  items: Item[];
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  deleteItem: (id: string) => void;
};

// adding new items comes up as null for some reason but the state gets updated
// probably has something to do with the action
const ExpenseItemList = ({ items, onChange, deleteItem }: Props) => {
  const listItems = items.map((item: Item) => (
    // i used some dummy data here so it would render
    <ExpenseItem
      key={'someID'}
      name={'someItem'}
      cost={30}
      deleteItem={deleteItem}
      onChange={onChange}
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

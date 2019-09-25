import React, { ChangeEvent } from 'react';
import ExpenseItem from "./ExpenseItem";
import { Item } from './types/types';

type Props = {
  items: Item[],
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
  deleteItem: (id: string) => void
}

const ExpenseItemList = ({ items, onChange, deleteItem }: Props) => {

  const listItems = items.map((item: Item) =>
    <ExpenseItem
      key={item.id}
      name={item.name}
      cost={item.cost}
      deleteItem={deleteItem}
      onChange={onChange}
    />
  )

  const renderList = () => {
    return (
      <form>
        <ul className="expense-list">
          {listItems}
        </ul>
      </form>
    )
  }

  return (
    renderList()
  )
}


export default ExpenseItemList;
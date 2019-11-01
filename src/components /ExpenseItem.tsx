import React, { ChangeEvent } from 'react';
import Input from './generic/Input';
import { Item } from '../types/types';

type Props = {
  item: Item,
  value?: any,
  id: string,
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onClick: (event: any) => void,
  handleOnChange: (event: any) => void
}

const ExpenseItem = ({ value, item, onClick, handleOnChange }: Props) => {

  return (
    <fieldset className='expense-item' id={item.id}>
      <label>Item</label>
      <Input type="text" 
          name="name" 
          className="item-name" 
          placeholder="Name of expense" 
          value={value} 
          handleOnChange={handleOnChange} />

      <label>Cost</label>
      <Input 
        type="number" 
        name="cost" 
        className="item-cost" 
        placeholder="Amount" 
        value={value} 
        handleOnChange={handleOnChange} />
      <button onClick={onClick} type="button"> x </button>
    </fieldset>
  )
}

export default ExpenseItem;
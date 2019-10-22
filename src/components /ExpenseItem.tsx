import React, { useState, ChangeEvent } from 'react';
import Input from './generic/Input';
import { Item } from '../types/types';

type Props = {
  id: string,
  value?: any,
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onClick: (event: any) => void,
  handleOnChange: (event: any) => void
}

const ExpenseItem = ({id, value, onClick, handleOnChange }: Props) => {

  return (
    <li className='expense-item' id={id}>
      <label>Item</label>
      <Input type="text" className="item-name" placeholder="Name of expense" value={value} handleOnChange={handleOnChange} />
      <label>Cost</label>
      <Input type="number" className="item-cost" placeholder="Amount" value={value} handleOnChange={handleOnChange} />
      <button onClick={onClick} type="button"> x </button>
    </li>
  )
}

export default ExpenseItem;
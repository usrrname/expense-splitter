import React from 'react';
import { ItemState } from '../types/types';

type Props = {
  itemState: ItemState,
  onClick: (event: any) => void,
}

const Total = ({ itemState, onClick }: Props) => {

  return (
    <>
      <span>{itemState.total}</span>
      <button onClick={onClick}> Get Total</button>
    </>
  )
}

export default Total;
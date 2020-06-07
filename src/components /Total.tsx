import React, { FormEvent } from 'react';
import { ItemState } from '../types/types';

type Props = {
  itemState: ItemState,
  onBlur?: (event: FormEvent) => void,
}

const Total = ({ itemState, onBlur }: Props) => {

  return (
    <><label>Total: </label>
      <span onBlur={onBlur}>{itemState.total}</span>
    </>
  )
}

export default Total;
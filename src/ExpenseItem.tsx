import React, { ChangeEvent, Component } from 'react';

type Props = {
  id: string,
  name: string,
  cost: number,
  onClick: (event: any) => void,
}

class ExpenseItem extends Component<Props>{

  readonly state = {
    name: '',
    cost: 0,
  }

  handleCostChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      cost: event.target.value
    })
  }

  handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    const { cost, name } = this.state;
    const { onClick, id } = this.props;
    return (
      <li className='expense-item' data-id={id}>
        <label>Item</label><input onChange={this.handleNameChange} type="text" name="item-name" placeholder="Name of expense" value={name}></input>
        <label>Cost</label><input onChange={this.handleCostChange} type="number" name="item-cost" placeholder="Amount" value={cost}></input>
        <button onClick={onClick} type="button"> x </button>
      </li>
    )
  }
}

export default ExpenseItem;
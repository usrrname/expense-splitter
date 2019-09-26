
import React, { ChangeEvent, Component } from 'react';

type Props = {
  id: string,
  name: string
  income: number,
  onClick: (event: any) => void,
}

class UserField extends Component<Props>{
  readonly state = {
    name: '',
    income: 0,
  }
  nameChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      name: event.target.value
    })
  }
  incomeChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      income: event.target.value
    })
  }
  render() {
    const { income, name } = this.state;
    return (
      <li className='user-item' data-id={this.props.id}>
        <label>Name</label>
        <input onChange={this.nameChange} type="text" placeholder="Enter your name" name="user-name" value={name} />
        <label>Income</label >
        <input onChange={this.incomeChange} name="user-income" type="number" value={income} />
        <button onClick={this.props.onClick} type="button"> x </button>
      </li>
    )
  }

}
export default UserField;
import React, { Component, ChangeEvent } from 'react';

type Props = {
  value?: string | number;
  type?: string;
  name?: string;
  placeholder?: string;
  className?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

class Input extends Component<Props>{
  state = {
    value: '',
  };

  private handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    try {
      this.setState({
        value: event.target.value
      })
    } catch (error) {
      this.setState({ error });
    }
  }

  public render() {
    const { value } = this.state;
    
    return (
      <input
        onChange={this.handleChange}
        className={this.props.className}
        type={this.props.type}
        placeholder={this.props.placeholder}
        name={this.props.name} 
        value={value}
      />
    )
  }
}
export default Input;
import React, {Component} from 'react';
import add_icon from '../../images/add_icon.svg';
import './Insert.css';

export default class Insert extends Component {
  state = {
    label: '',
  };

  onLabelChange = (event) => {
    this.setState({label: event.target.value});
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onAdd(this.state.label);
    this.setState({label: ''});
  };

  render() {
    return (
      <div className='fixContainer'>
        <form className='insert' onSubmit={this.onSubmit}>
          <img src={add_icon} alt='here is input for adding new todo item' />
          <input
            type='text'
            placeholder='Добавить задачу'
            onChange={this.onLabelChange}
            value={this.state.label}
          />
        </form>
      </div>
    );
  }
}

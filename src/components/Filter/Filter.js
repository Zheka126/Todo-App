import React, {Component} from 'react';
import './Filter.css';

export default class Filter extends Component {
  buttons = [
    {name: 'all', label: 'Все'},
    {name: 'active', label: 'Активные'},
    {name: 'done', label: 'Выполненные'},
  ];

  render() {
    const buttons = this.buttons.map(({name, label}) => {
      const isActive = this.props.filter === name;
      const classNames = 'btn ' + (isActive ? 'btn-active' : '');
      return (
        <button
          key={name}
          className={classNames}
          onClick={() => this.props.onFilterChange(name)}
        >
          {label}
        </button>
      );
    });
    return <div className='filter btn-group'>{buttons}</div>;
  }
}

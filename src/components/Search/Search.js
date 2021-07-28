import React, {Component} from 'react';
import './Search.css';
import search_icon from '../../images/search_icon.svg';

export default class Search extends Component {
  state = {label: ''};

  onInputChange = (event) => {
    this.setState({label: event.target.value});
    this.props.onSearchChange(event.target.value);
  };

  render() {
    return (
      <div className='search'>
        <img src={search_icon} alt='' />
        <input
          type='text'
          placeholder='Найти'
          value={this.state.label}
          onChange={this.onInputChange}
        />
      </div>
    );
  }
}

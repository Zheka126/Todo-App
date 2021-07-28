import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './FatherList.css';

const today = new Date();
const zero = today.getMonth() + 1 < 10 ? '0' : '';
const date =
  today.getDate() +
  '.' +
  zero +
  (today.getMonth() + 1) +
  '.' +
  today.getFullYear() +
  ' ' +
  today.getHours() +
  ':' +
  today.getMinutes();

const getAllRecords = () => {
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = {
      idx: i,
      address: localStorage.key(i),
    };
    if (key.address.includes('q')) {
      keys.push(key);
    }
  }
  console.log(keys);
  return keys;
};

export default class FatherList extends Component {
  render() {
    return (
      <ul className='FatherList'>
        {getAllRecords().map(({idx, address}) => {
          return (
            <li key={idx}>
              <Link className='ListItem' to={'App/' + address}>
                <span className='wrapper'>
                  <h4>{idx + 1 + '.'}</h4>
                  <h4>{date}</h4>
                </span>
                <h4>5/6</h4>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

import React from 'react';
import FatherList from '../FatherList/FatherList';
import './CreatePageBody.css';
import Add_button from '../../images/Add_button.png';
import {Link} from 'react-router-dom';

export default function CreatePageBody() {
  const now = 'q' + Date.now();
  window.now = now;

  const createNewList = () => {
    window.localStorage.setItem(
      window.now.toString(),
      window.localStorage.getItem('state')
    );
  };

  return (
    <div className='CreatePageBody'>
      <h1>Список дел</h1>
      <div className='create-block' onClick={() => createNewList()}>
        <Link to={'/App/' + now}>
          <h3>На сегодня</h3>
          <img src={Add_button} alt='Add button' />
          <p>
            Благодаря списку дел можно больше не удерживать в голове множество
            задач, что освободит когнитивные ресурсы и позволит значительно
            повысить продуктивность.
          </p>
        </Link>
      </div>

      <div className='table-list'>
        <div className='header-line'>
          <span className='wrapper'>
            <h4>№</h4>
            <h4>Дата открытия</h4>
          </span>
          <h4>Завершённость</h4>
        </div>
        <FatherList />
      </div>
    </div>
  );
}

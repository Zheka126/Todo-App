import React from 'react';
import {Link} from 'react-router-dom';
import StartButton from '../StartButton/StartButton';
import menu from '../../images/icon-menu.png';
import more from '../../images/more.png';
import './Header.css';


export default function Header() {
  return (
    <div>
      <div className='Header Header1'>
        <img src={menu} alt='menu' />
        <Link className='link' to='/'>
          Logo
        </Link>
        <img src={more} alt='more' />
      </div>

      <div className='Header Header2'>
        <div className='wrapper'>
          <Link className='link' to='/'>
            Logo
          </Link>
          <Link className='link' to='/Purpose'>
            Цель
          </Link>
        </div>
        <StartButton />
      </div>
    </div>
  );
}

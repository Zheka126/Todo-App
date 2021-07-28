import React from 'react';
import './TodoItem.css';
import Checkbox from '../../images/Checkbox.svg';
import box from '../../images/box.svg';
import Important from '../../images/Important.svg';
import Delete from '../../images/Delete.svg';

export default function TodoItem({
  id,
  label,
  important,
  done,
  onToggleImportant,
  onToggleDone,
  onDelete,
}) {
  const isImportant = important ? 'TodoItem imp' : 'TodoItem';
  const isDone = done ? 'hidden' : '';
  const unDone = !done ? 'hidden' : '';
  return (
    <div key={id} className={isImportant}>
      <div className='wrapper'>
        <button className='checkbox' onClick={onToggleDone}>
          <img src={box} className={isDone} alt='checkbox button' />
          <img src={Checkbox} className={unDone} alt='checkbox button' />
        </button>
        <span>{label}</span>
      </div>

      <div className='btns'>
        <button className='button-important' onClick={onToggleImportant}>
          <img src={Important} alt='important button' />
        </button>
        <button className='button-delete' onClick={onDelete}>
          <img src={Delete} alt='Delete button' />
        </button>
      </div>
    </div>
  );
}

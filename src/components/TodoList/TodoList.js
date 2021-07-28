import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

export default function TodoList({data, onToggleImportant, onToggleDone, onDelete}) {
  return (
    <ul className='TodoList'>
      {data.map((item) => {
        const {id, ...itemProps} = item;
        return (
          <TodoItem
            key={id}
            {...itemProps}
            onToggleDone={() => onToggleDone(id)}
            onToggleImportant={() => onToggleImportant(id)}
            onDelete={() => onDelete(id)}
          />
        );
      })}
    </ul>
  );
}

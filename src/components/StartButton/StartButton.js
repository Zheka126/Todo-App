import { Link } from 'react-router-dom';
import './StartButton.css';

export default function StartButton() {
  return (
    <button className='start-button'>
      <Link to='/Create'>Начать</Link>
    </button>
  );
}

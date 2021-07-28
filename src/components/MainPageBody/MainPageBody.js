import './MainPageBody.css';
import bloknot from '../../images/bloknot.jpg';
import first from '../../images/first.png';
import second from '../../images/second.png';
import third from '../../images/third.png';
import StartButton from '../StartButton/StartButton';

export default function MainPageBody() {
  return (
    <section>
      <div className='bloknot-block'>
        <h2>Лёгкий и эффективный способ повысить продуктивность </h2>
        <img src={bloknot} alt='Блокнот на жёлтом фоне' />
      </div>

      <div className='first-block'>
        <img src={first} alt='Блокнот на жёлтом фоне' />
        <div>
          <h2>Организованность - основа успеха </h2>
          <p>
            Организуйте свою жизнь в каждой сфере, чтобы становиться лучше
            каждый день!
          </p>
        </div>
      </div>

      <div className='second-block'>
        <div>
          <h2>Распишите планы на потом, сосредоточьтесь сейчас </h2>
          <p>Освободите голову, работайте быстрее и эффективнее</p>
        </div>
        <img src={second} alt='Блокнот на жёлтом фоне' />
      </div>

      <div className='third-block'>
        <img src={third} alt='Блокнот на жёлтом фоне' />
        <div>
          <h2>Доступ с любого устройства </h2>
          <p>Введите список дел в любом месте и в любое время</p>
        </div>
      </div>

      <h1 className='try-exclamation'>Попробуйте прямо сейчас!</h1>

      <div className='mag'>
        <StartButton />
      </div>
    </section>
  );
}

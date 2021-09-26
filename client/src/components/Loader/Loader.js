import { FaSpinner } from 'react-icons/fa';
import s from './Loader.module.css';

export const Loader = () => {
  return (
    <div role="alert">
      <div className={s.spinner}>
        <FaSpinner size="150" className={s.iconSpin} />
        Loading...
      </div>
    </div>
  );
}
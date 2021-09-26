import PropTypes from 'prop-types';

import s from './Button.module.css'

export const Button = ({ onClick}) => {

    return (
        <button onClick={onClick} className={s.button} type="button">
       Add new bank
      </button>
    );
  }

Button.propTypes = {
    onClick: PropTypes.func,
};

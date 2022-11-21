import React from 'react';
import styles from './Button.module.css';

function Button({ onClick }) {
  return (
    <button onClick={onClick} className={styles.button}>Search</button>
  );
}

export default Button;
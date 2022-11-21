import React from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import styles from './ThemeSwitcher.module.css';

function ThemeSwitcher({ isOn, handleToggle }) {
  return (
      <button className={styles.themeSwitcher} onClick={handleToggle}>
        {isOn
          ?
          <>
            <span>LIGHT</span>
            <BsFillSunFill/>
          </>
          :
          <>
            <span>DARK</span>
            <BsFillMoonFill/>
          </>
        }
      </button>
  );
}

export default ThemeSwitcher;
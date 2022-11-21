import React from 'react';
import Button from "../Button/Button";
import { FiSearch } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserDataRequest, setUserInputValue } from "../../store/slices/userSlice";
import styles from './Input.module.css';

function Input(props) {
  const { userInputValue } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onInputChange = (event) => {
    dispatch(setUserInputValue(event.target.value))
  }

  const onSearchClick = () => {
    dispatch(fetchUserDataRequest())
  }

  return (
    <div className={styles.inputWrapper}>
      <FiSearch/>
      <input autoFocus type="text" onChange={onInputChange} onKeyPress={(e) => e.key === 'Enter' && onSearchClick()} placeholder='GitHub username...' value={userInputValue}/>
      <Button onClick={onSearchClick}/>
    </div>
  );
}

export default Input;
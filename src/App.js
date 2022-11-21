import {useState, useCallback} from "react";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import Input from "./components/Input/Input";
import useDarkTheme from "./hooks/useDarkTheme/useDarkTheme";
import UserInfo from "./components/UserInfo/UserInfo";
import { useSelector } from "react-redux";
import styles from './App.module.css';

function App() {

  const { switchTheme, theme, isDark } = useDarkTheme();
  const [pageMode, setPageMode] = useState(isDark);
  const { userData } = useSelector((state) => state.user);

  const onSwitchToggle = useCallback(() => {
    switchTheme();
    setPageMode(!pageMode)
  }, [pageMode, switchTheme])

  return (
    <div className={styles.app} data-theme={theme}>
      <div className={styles.appWrapper}>
      <div className={styles.header}>
        <h1>{userData?.login}</h1>
        <ThemeSwitcher isOn={pageMode} handleToggle={onSwitchToggle}/>
      </div>
      <Input/>
      <UserInfo/>
      </div>
    </div>
  );
}

export default App;

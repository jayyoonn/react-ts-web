import { Link } from 'react-router-dom';
import useCounterStore from '@/store/counter';
import CountNum from '@/components/CountNum';
import { useState, useEffect } from 'react';
import styles from './index.module.scss';
import Logo from '@/assets/images/React.png';
import { init } from '@/api';

export default () => {
  const increase = useCounterStore((state) => state.increase);
  const [title] = useState(import.meta.env.VITE_APP_TITLE);

  const pageInit = async () => {
    const res = await init();
    console.log(res);
  };

  useEffect(() => {
    pageInit();
  }, []);

  return (
    <div className={styles.home}>
      <h1 className={styles.title}>{title}</h1>
      <img src={Logo} />
      <div className={styles.main}>
        <button onClick={increase}>加一</button>
        <CountNum />
        <br />
        <Link to="/about">页面跳转</Link>
      </div>
    </div>
  );
};

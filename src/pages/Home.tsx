import { Link } from 'react-router-dom';
import useCounterStore from '@/store/counter';
import CountNum from '@/components/CountNum';
import { useState } from 'react';

export default () => {
  const increase = useCounterStore((state) => state.increase);
  const title = useState(import.meta.env.VITE_APP_TITLE);

  return (
    <>
      <p>{title}</p>
      <CountNum />
      <button onClick={increase}>加一</button>
      <br />
      <Link to="/about">页面跳转</Link>
    </>
  );
};

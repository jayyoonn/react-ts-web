import { Link } from 'react-router-dom';
import useCounterStore from '@/store/counter';
import CountNum from '@/components/CountNum';

export default () => {
  const increase = useCounterStore((state) => state.increase);

  return (
    <>
      <h1>Home Page</h1>
      <CountNum />
      <button onClick={increase}>加一</button>
      <br />
      <Link to="/about">页面跳转</Link>
    </>
  );
};

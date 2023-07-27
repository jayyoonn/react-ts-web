import useCounterStore from '@/store/counter';

export default () => {
  const num = useCounterStore((state) => state.num);
  return <p>{num} </p>;
};

import { Link } from 'react-router-dom';

export default () => {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/about">页面跳转</Link>
    </>
  );
};

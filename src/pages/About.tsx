import { useNavigate } from 'react-router-dom';

export default () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <h1>About Page</h1>
      <button onClick={goBack}>返回</button>
    </>
  );
};

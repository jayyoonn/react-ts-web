import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';

export default () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>About Page</h1>
      <button onClick={goBack}>返回</button>
    </div>
  );
};

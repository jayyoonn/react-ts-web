import styles from './index.module.scss';

export default () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>404 - 页面未找到</h1>
      <p className={styles.message}>抱歉，您访问的页面不存在。</p>
    </div>
  );
};

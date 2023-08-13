import styles from './index.module.scss';

// LoadingPage 组件，用于显示加载中页面
const LoadingPage = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingIndicator} />
      <p className={styles.loadingText}>页面加载中，请稍候...</p>
    </div>
  );
};

export default LoadingPage;

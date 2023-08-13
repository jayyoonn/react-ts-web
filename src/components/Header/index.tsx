import React, { ReactNode } from 'react';

import styles from './index.module.scss';

interface HeaderProps {
  children?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return <div className={styles.header}>{children}</div>;
};

export default Header;

import React, { ReactNode } from 'react';
import styles from './index.module.scss';

interface FooterProps {
  children?: ReactNode;
}

const Footer: React.FC<FooterProps> = ({ children }) => {
  return <footer className={styles.footer}>{children}</footer>;
};

export default Footer;

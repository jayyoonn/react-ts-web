import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './index.module.scss';

const BasicLayout: React.FC = () => {
  return (
    <>
      <Header>This is Header.</Header>
      <div className={styles.content}>
        <Outlet />
      </div>
      <Footer>This is Footer.</Footer>
    </>
  );
};

export default BasicLayout;

import React from 'react';
import Business from '../Business/Business';
import styles from './BusinessList.module.css';

function BusinessList() {
  const arr = [1, 2, 3];

  const businessList = arr.map((item, index) => {
    return <Business key={index} />;
  });
  return <section className={styles.First}>{businessList}</section>;
}

export default BusinessList;

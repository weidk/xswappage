
import React from 'react';
import styles from './index.css';

export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>
          <h1>欢迎访问东海证券X-SWAP交易终端</h1>
        </li>
      </ul>
    </div>
  );
}

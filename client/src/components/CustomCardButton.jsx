import React from 'react';
import styles from '../styles';


const CustomCardButton = ({ restStyles }) => (
    <button
      type="button"
      className={`${styles.btn} ${restStyles}`}
    >
    </button>
  );

export default CustomCardButton;
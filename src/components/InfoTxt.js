import React from 'react';
import styles from './InfoTxt.module.css';

const InfoTxt = (props) => {
  return (
    <div className={styles.contenedor}>
      <div className={styles.titulo}>
        <label>{props.titulo}</label>
      </div>
      <div className={styles.valor}>
        <label>{props.valor}</label>
      </div>
    </div>
  );
};

export default InfoTxt;

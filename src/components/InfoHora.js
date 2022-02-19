import React from 'react';
import styles from './InfoHora.module.css';

const InfoHora = (props) => {
  return (
    <div className={styles.contenedor}>
      <div className={styles.titulo}>
        <label>{props.titulo}</label>
      </div>
      <div className={styles.valor}>
        <text>{props.valor}</text>
      </div>
    </div>
  );
};

export default InfoHora;

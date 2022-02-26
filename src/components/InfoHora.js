import React from 'react';
import styles from './InfoHora.module.css';

const InfoHora = (props) => {
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

export default InfoHora;

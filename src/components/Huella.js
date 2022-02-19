import { Fragment } from 'react';
import styles from './Huella.module.css';
import HuellaInformacion from '../components/HuellaInformacion';

const Huella = (props) => {
  return (
    <Fragment>
      <div className={styles.contenedor}>
        <div className={styles.titulo}>HUELLA # {props.numeroHuella}</div>
        <div className={styles.informacionGeneral}>
          <div className={styles.imagen}>IMAGEN</div>
          <div className={styles.informacionDetalle}>
            <HuellaInformacion />
          </div>
        </div>
        <div className={styles.comentario}>COMENTARIO</div>
      </div>
    </Fragment>
  );
};

export default Huella;
import { Fragment } from 'react';
import styles from './Huella.module.css';
import HuellaInformacion from '../components/HuellaInformacion';
import HuellaImagen from './HuellaImagen';

const Huella = (props) => {
  return (
    <Fragment>
      <div className={styles.contenedor}>
        <div className={styles.titulo}>HUELLA # {props.datos.id}</div>
        <div className={styles.informacionGeneral}>
          <HuellaImagen estados={props.datos.estados}/>
          <div className={styles.informacionDetalle}>
            <HuellaInformacion info={props.datos.info}/>
          </div>
        </div>
        <div className={styles.comentario}>{props.datos.comentario} </div>
      </div>
    </Fragment>
  );
};

export default Huella;

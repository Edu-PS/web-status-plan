import Huella from './Huella';
import styles from './HEM.module.css';
import { Fragment } from 'react';

const DUMMY_DATA = {
  H1: {
    id: 1,
    estados: {
      inspeccionInicial: false,
      rigidez: false,
      parado: false,
      protecciones: false,
      vacio: false,
      calentamiento: false,
      finalizado: false,
    },
    info: {
      nombreProyecto: 'Proyecto 1',
      numeroSerie: '123456',
      fechaInicio: '2022-03-01 12:12:12',
      fechaFin: '2022-03-01 12:12:12',
    },
    comentario: `Comentario del PROYECTO 1 este comentario es mas largo para probar algunas cosas con el dimen agregando comentarios adicionales para saber como sigue creciendo este`,
  },
  H2: {
    id: 2,
    estados: {
      inspeccionInicial: false,
      rigidez: false,
      parado: false,
      protecciones: false,
      vacio: false,
      calentamiento: false,
      finalizado: false,
    },
    info: {
      nombreProyecto: 'Proyecto 2',
      numeroSerie: '234567',
      fechaInicio: '2022-03-01 12:12:12',
      fechaFin: '2022-03-01 12:12:12',
    },
    comentario: `Comentario del PROYECTO 2`,
  },
};

const HEM = () => {
  return (
    <Fragment>
      <hr />
      <div className={styles.contenedor}>
        <Huella datos={DUMMY_DATA.H1} />
        <Huella datos={DUMMY_DATA.H2} />
      </div>
      <hr />
    </Fragment>
  );
};

export default HEM;

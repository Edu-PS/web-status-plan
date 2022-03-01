import styles from './HuellaInformacion.module.css';
import InfoHora from './InfoHora';
import InfoTxt from './InfoTxt';

const HuellaInformacion = (props) => {
  return (
    <div className={styles.contenedor}>
      <InfoTxt titulo="PROYECTO" valor={props.info.nombreProyecto} />
      <InfoTxt titulo="NUMERO SERIE" valor={props.info.numeroSerie} />
      <InfoHora titulo="FECHA INICIO " valor={props.info.fechaInicio} />
      <InfoHora titulo="FECHA PREVISTA FIN" valor={props.info.fechaFin} />
    </div>
  );
};

export default HuellaInformacion;

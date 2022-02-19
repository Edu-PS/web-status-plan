import styles from './HuellaInformacion.module.css';
import InfoHora from './InfoHora';
import InfoTxt from './InfoTxt';

const HuellaInformacion = () => {
  return (
    <div className={styles.contenedor}>
      <InfoTxt titulo="PROYECTO" valor="PERU I" />
      <InfoTxt titulo="NUMERO SERIE" valor="12345678" />
      <InfoHora titulo="FECHA INICIO " valor="2022-04-14 12:12:12" />
      <InfoHora titulo="FECHA PREVISTA FIN" valor="2022-04-14 12:12:12" />
    </div>
  );
};

export default HuellaInformacion;

import Huella from './Huella';
import styles from './HEM.module.css';

const HEM = () => {
  return (
    <div className={styles.contenedor}>
      <Huella />
      <Huella />
    </div>
  );
};

export default HEM;

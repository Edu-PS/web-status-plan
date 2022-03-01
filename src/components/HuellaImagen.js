import styles from './HuellaImagen.module.css';

const HuellaImagen = (props) =>{

    const ocultoFinalizado = props.estados.finalizado;
    const ocultoCalentamiento = props.estados.calentamiento;
    const ocultoVacio = props.estados.vacio;
    const ocultoProtecciones = props.estados.protecciones;
    const ocultoParado = props.estados.parado;
    const ocultoRigideces = props.estados.rigidez;
    const ocultoInicial = props.estados.inspeccionInicial;

    const styleFinalizado = ocultoFinalizado ? `${styles.finalizado} ${styles.oculto}` : `${styles.finalizado}`; 
    const styleCalentamiento = ocultoCalentamiento ? `${styles.calentamiento} ${styles.oculto}`: `${styles.calentamiento}`; 
    const styleVacio = ocultoVacio ? `${styles.vacio} ${styles.oculto}`: `${styles.vacio}`; 
    const styleProtecciones = ocultoProtecciones ? `${styles.protecciones} ${styles.oculto}`: `${styles.protecciones}`; 
    const styleParado = ocultoParado ? `${styles.parado} ${styles.oculto}`: `${styles.parado}`; 
    const styleRigidece = ocultoRigideces ? `${styles.rigideces} ${styles.oculto}`: `${styles.rigideces}`; 
    const styleInicial = ocultoInicial ? `${styles.inicial} ${styles.oculto}`: `${styles.inicial}`; 

    
    return (
        <div className={styles.contenedor}>
            <div className={styleFinalizado}>
                FINALIZADO
            </div>
            <div className={styleCalentamiento}>
                TEST CALENTAMIENTO
            </div>
            <div className={styleVacio}>
                TEST TENSION DE VACIO
            </div>
            <div className={styleProtecciones}>
                TEST PROTECCIONES
            </div>
            <div className={styleParado}>
                PRUEBAS EQUIPO PARADO
            </div>
            <div className={styleRigidece}>
                RIGIDECES (ALTA Y BAJA)
            </div>
            <div className={styleInicial}>
                INSPECCION INICIAL
            </div>
        </div>
    );
};

export default HuellaImagen;
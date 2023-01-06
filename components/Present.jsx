import styles from '../styles/Present.module.css'

export default function Present(){
    return (
        <div className={styles.present}>
            <div className={styles.cover}></div>
            <div className={styles.body}></div>
            <div className={styles.ribbonOne}></div>
            <div className={styles.ribbonTwo}></div>
        </div>
    );
}
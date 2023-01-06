import styles from '../styles/Door.module.css'

export default function Door(props) {
    return (
        <div className={styles.area}>
            <div className={styles.structure}>
                <div className={styles.door}>
                    <div className={styles.number}>
                        8
                    </div>
                    <div className={styles.doorHandle}></div>
                </div>

            </div>
            <div className={styles.ground}>
                
            </div>
        </div>
    );
}
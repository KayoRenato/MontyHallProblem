import styles from '../styles/Door.module.css'
import DoorModel from '../model/door'

interface DoorProps {
    value: DoorModel
}

export default function Door(props: DoorProps) {

    const { value } = props
    const selected = value.isSelected ? styles.selected : ''

    return (
        <div className={styles.area}>
            <div className={`${styles.structure} ${selected}`}>
                <div className={styles.door}>
                    <div className={styles.number}>
                        {value.number}
                    </div>
                    <div className={styles.doorHandle}></div>
                </div>

            </div>
            <div className={styles.ground}>

            </div>
        </div>
    );
}
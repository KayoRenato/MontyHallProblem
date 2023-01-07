import styles from '../styles/Door.module.css'
import DoorModel from '../model/door'

interface DoorProps {
    value: DoorModel
    onChange: (value: DoorModel) => void
}

export default function Door(props: DoorProps) {

    const { value } = props
    const selected = value.isSelected && !value.isOpen ? styles.selected : ''

    const changeSelection = e => props.onChange(value.changeSelected())
    const open = e => {
        e.stopPropagation()
        props.onChange(value.toOpen())}

    function renderDoor() {
        return (
            <div className={styles.door}>
                <div className={styles.number}>
                    {value.number}
                </div>
                <div className={styles.doorHandle} onClick={open}></div>
            </div>
        );
    }

    return (
        <div className={styles.area} onClick={changeSelection}>
            <div className={`${styles.structure} ${selected}`}>
                {value.isOpen ? false : renderDoor()}
            </div>
            <div className={styles.ground}>

            </div>
        </div>
    );
}
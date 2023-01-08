import styles from '../styles/NumberInput.module.css'

interface NumberInputProps {
    text: string
    value: number
    onChange: (newValue: number) => void
}


export default function NumberInput(props: NumberInputProps) {

    const inc = () => props.value < 20 ? props.onChange(props.value + 1) : props.value
    const dec = () => props.value > 1 ? props.onChange(props.value - 1) : props.value

    return (
        <div className={styles.NumberInput}>
            <span className={styles.text}>{props.text}</span>
            <span className={styles.value}>{props.value}</span>
            <div className={styles.button}>
                <button className={styles.btn} onClick={inc}> + </button>
                <button className={styles.btn} onClick={dec}> - </button>
            </div>
        </div>
    );
}
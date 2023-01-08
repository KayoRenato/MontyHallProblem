import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


import Door from "../../../components/Door";
import { createDoor, updateDoor } from '../../../functions/door'
import styles from '../../../styles/Game.module.css'


export default function game() {

    const router = useRouter()

    const [doors, setDoors] = useState([])

    useEffect(() => {
        setDoors(createDoor(+router.query.doors, +router.query.hasPresent))
    }, [router?.query])
    

    function renderDoors() {
        return doors.map(door => {
            return <Door key={door.number} value={door}
                onChange={newDoor => setDoors(updateDoor(doors, newDoor))} />
        })
    }

    return (
        <div id={styles.game}>
            <div className={styles.button}>
                <Link href={'/'}>
                    <button> Restart Game</button>
                </Link>
            </div>
            <div className={styles.doors}>
                {renderDoors()}
            </div>
        </div >
    );
}
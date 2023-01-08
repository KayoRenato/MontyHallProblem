import styles from '../styles/Form.module.css'
import Card from '../components/Card'
import NumberInput from '../components/NumberInput'
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [doorsInput, setDoors] = useState(3)
  const [presentDoor, setPresentDoors] = useState(1)

  const [available, setAvailable] = useState(false)

  console.log(available)
  useEffect(() => {
    const doors = doorsInput
    const hasPresent = presentDoor

    const avaiableDoors = doors > 2 && doors < 21
    const avaliablePresent = hasPresent > 0 && hasPresent <= doors

    setAvailable(avaiableDoors && avaliablePresent)
  }, [doorsInput, presentDoor])

  function invalidValue() {
    return (
      <h2>Invalid Values!</h2>
    );
  }


  return (
    <div className={styles.formContainer}>
      <div className={styles.form}>
        <div>
          <Card bgcolor='#c0392c'>
            <h1>Monty Hall <span>Game</span></h1>
          </Card>
          <Card>
            <NumberInput text='How Many Doors?'
              value={doorsInput}
              onChange={newDoors => setDoors(newDoors)} />
          </Card>
        </div>
        <div>
          <Card>
            <NumberInput text="Where's the gift?"
              value={presentDoor}
              onChange={presentBox => setPresentDoors(presentBox)} />
          </Card>
          <Card bgcolor='#28a085'>
            <Link href={available ? `/game/${doorsInput}/${presentDoor}` : '/'} className={styles.link}>
              <h2> Start </h2>
            </Link>
          </Card>
        </div>
        <div className={styles.err}>
          {!available ? invalidValue() : ''}
        </div>
      </div>
    </div>
  );
}
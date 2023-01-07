import { useState } from "react";
import Door from "../components/Door";
import Present from "../components/present";
import DoorModel from "../model/door";
import { createDoor, updateDoor } from '../functions/door'

export default function Home() {
  const [doors, setDoors] = useState(createDoor(6, 2))

  function renderDoors() {
    return doors.map(door => {
      return <Door key={door.number} value={door}
        onChange={newDoor => setDoors(updateDoor(doors, newDoor))} />
    })
  }

  return (
    <div style={{ display: 'flex' }}>
      {renderDoors()}
    </div>
  );
}
import DoorModel from "../model/door";

export function createDoor(qtDoor: number, idxPresent: number): DoorModel[] {
    return Array.from({ length: qtDoor }, (_, i) => {
        const doorNumber = i + 1
        const hasPresent = doorNumber === idxPresent

        return new DoorModel(doorNumber, hasPresent)
    })
}

export function updateDoor(doors: DoorModel[], changedDoor: DoorModel): DoorModel[] {
    return doors.map(door => {
        if (door.number === changedDoor.number) {
            return changedDoor
        }
        return changedDoor.isOpen ? door : door.markOff()
    })
}
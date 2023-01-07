export default class DoorModel {

    #number: number
    #hasPresent: boolean
    #isSelected: boolean
    #isOpen: boolean


    constructor(number: number, hasPresent = false, isSelected = false, isOpen = false) {
        this.#number = number;
        this.#hasPresent = hasPresent;
        this.#isSelected = isSelected;
        this.#isOpen = isOpen;
    }

    get number() {
        return this.#number;
    }

    get hasPresent() {
        return this.#hasPresent;
    }

    get isSelected() {
        return this.#isSelected;
    }

    get isOpen() {
        return this.#isOpen;
    }

    changeSelected() {
        const selected = !this.isSelected;
        return new DoorModel(this.number, this.hasPresent, selected, this.isOpen)
    }

    toOpen() {
        const isOpen = true;
        return new DoorModel(this.number, this.hasPresent, this.isSelected, isOpen)
    }


}
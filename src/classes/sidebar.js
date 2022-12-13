import { block } from "../utils"
export class Sidebar {
    constructor(selector) {
        this.$el = document.querySelector(selector)

        this.init()
    }

    init() {
        this.$el.insertAdjacentHTML('afterbegin', this.template)
        this.$el.eddEventListener('submit', this.add)
    }

    get template() {
        return [
            block('text'),
            block('tittle')
        ].join('')
    }

    add(event) {
        event.preventDefault()

        console.log(event.target)

    const type = event.target.name
    const value = event.target.value.value
    const styles = event.target.styles.value

    debugger
    }
}
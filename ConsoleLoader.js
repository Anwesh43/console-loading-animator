const Animator = require('./Animator')
const State = require('./State')
class ConsoleLoader {

    constructor() {
        this.animator = new Animator()
        this.state = new State()
        this.k = 0
    }

    render() {
        console.clear()
        if (this.k % 2 == 0) {
            console.log("/")
        } else {
            console.log("\\")
        }
        this.k++
    }

    start() {
        this.state.startUpdating(() => {
            this.animator.start(() => {
                this.render()
                this.state.update(() => {
                    this.animator.stop()
                    this.render()
                })
            })
        })
    }
}

module.exports = new ConsoleLoader()

class Player {
    constructor(name, type) {
        console.log('player', this);
        this.name = name
        this.type = type
    }
    introduce() {
        console.log(`Hi, I am ${this.name}, I'm a ${this.type}`)
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
        console.log('wizard', this)
    }
    play() {
        console.log(`WEEEEEEEE are ${this.type}`)
    }
}

const wizard1 = new Wizard('Shelly', 'Healer')
const wizard2 = new Wizard('Shawn', 'Peace Keeper')

wizard2.introduce()
wizard1.play()
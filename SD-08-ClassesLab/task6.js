export class Player {
    constructor(name, level) {
        this.name = name
        this.level = level
        this.experience = 0

        this.gainExperience = function(amount) {
            this.experience += amount

            if (this.experience >= 100) {
                this.level++
                this.experience -= 100
            }
        }
    }
}

class Party {
    constructor() {
        this.members = []

        this.addPlayer = function(player) {
            this.members.push(player)
        }

        this.removePlayer = function(player) {
            const index = this.members.indexOf(player)

            if (index !== -1) {
                this.members.splice(index, 1)
            }
        }
    }
}

const player1 = new Player("Jesus", 1)
const player2 = new Player("Ana", 2)

const party = new Party()

party.addPlayer(player1)
party.addPlayer(player2)

console.log(party.members)

party.removePlayer(player1)

console.log(party.members)
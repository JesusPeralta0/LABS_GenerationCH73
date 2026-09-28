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

const player = new Player("Jesus", 1)

player.gainExperience(50)
console.log(player)

player.gainExperience(60)
console.log(player)
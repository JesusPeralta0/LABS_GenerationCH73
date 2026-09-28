export class Player {
    constructor(name, level) {
        this.name = name
        this.level = level
        this.experience = 0
        this.inventory = {}

        this.gainExperience = function(amount) {
            this.experience += amount

            if (this.experience >= 100) {
                this.level++
                this.experience -= 100
            }
        }

        this.addItem = function(item, quantity) {
            if (this.inventory[item] === undefined) {
                this.inventory[item] = quantity
            } else {
                this.inventory[item] += quantity
            }
        }

        this.removeItem = function(item, quantity) {
            if (this.inventory[item] !== undefined) {
                this.inventory[item] -= quantity

                if (this.inventory[item] <= 0) {
                    delete this.inventory[item]
                }
            }
        }
    }
}

const player = new Player("Jesus", 1)

player.addItem("Potion", 5)
player.addItem("Sword", 1)
player.addItem("Potion", 3)

console.log(player.inventory)

player.removeItem("Potion", 2)

console.log(player.inventory)

player.removeItem("Potion", 6)

console.log(player.inventory)
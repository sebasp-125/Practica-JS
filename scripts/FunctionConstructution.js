//Create PowerFull Girl objects 

function Powerful_Girl(name, color, superPower) {
    this.Power_Name = name
    this.Power_color = color
    this.Power_superPower = superPower
    this.isLeader = false

    this.displayInfo = function (params) {
        console.log(`Powerful Girl Information:
        Name: ${this.Power_Name} , Color: ${this.Power_color} , SuperPower: ${this.Power_superPower}
        ${this.isLeader ? 'Leader' : 'Nou Leader'}
        `)
    }
    this.BecomeLeader = function () {
        this.isLeader = true
        console.log(`${this.Power_Name} becomes leader`);
    }
}

const Andrea = new Powerful_Girl("Andrea", 'Red', "Ice Power")
const Manuela = new Powerful_Girl("Manuela", 'Pink', "Super Men")

Andrea.displayInfo()
Manuela.displayInfo()

Manuela.BecomeLeader()
Andrea.displayInfo()
Manuela.displayInfo()
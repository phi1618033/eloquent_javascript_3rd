let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
}

let killerRabbit = makeRabbit("killer");

// function Rabbit(type) {
//     this.type = type;
// }

// Rabbit.prototype.speak = function (line) {
//     console.log(`The ${this.type} rabbit says '${line}'`);
// };

// Rabbit.prototype.toString = function () {
//     return `This is a ${this.type} rabbit`;
// }

class Rabbit {
    constructor(type) {
        this.type = type;
    }

    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

let weirdRabbit = new Rabbit("weird");
weirdRabbit.color = "blue";
console.log(weirdRabbit);
// weirdRabbit.speak("Skrrrrreeeer!");
// console.log(Object.getPrototypeOf(Rabbit));
// console.log(Object.getPrototypeOf(weirdRabbit));
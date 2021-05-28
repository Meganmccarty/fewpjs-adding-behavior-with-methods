class Cat {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    speak() {
        return `${this.name} says meow!`
    }
}

const abe = new Cat('Abe', 'male');
console.log(abe.name);
console.log(abe.sex);
console.log(abe.speak());

class Dog {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    speak() {
        return `${this.name} says woof!`
    }
}

class Bird {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    speak() {
        if (this.sex === 'male') {
            return `It's me! ${this.name}, the parrot!`;
        } else {
            return `${this.name} says squawk!`;
        }
    }
}
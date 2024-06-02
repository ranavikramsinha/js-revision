//* Abstraction

//* This is like the car with its magical functions protected inside
const enchantedCar = {
    color: 'red',
    start: function() {
        console.log("The enchanted car has started.");
    },
    fly: function() {
        console.log("The car is flying!");
    }
};

//* Jasmine can use the car's features without knowing how they work inside
enchantedCar.start(); //* Output: The enchanted car has started.
enchantedCar.fly();   //* Output: The car is flying!


//* Encapsulation

//* The secret garden object encapsulates its properties and methods
const secretGarden = (function() {
    //* Private properties and methods
    let flowers = ['rose', 'tulip', 'lily'];
    let magicalWater = 100;
    
    function waterPlants() {
        magicalWater -= 10;
        console.log("Plants have been watered.");
    }
    
    return {
        //* Public methods
        viewFlowers: function() {
            console.log(flowers);
        },
        water: function() {
            waterPlants();
        }
    };
})();

//* Emma can interact with the garden through the public methods
secretGarden.viewFlowers(); //* Output: ['rose', 'tulip', 'lily']
secretGarden.water();       //* Output: Plants have been watered.


//** Inheritance

//* The base Animal class
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }

    sleep() {
        console.log(`${this.name} is sleeping.`);
    }
}

//* The Dog class inherits from Animal
class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} is barking.`);
    }
}

//* Creating a new Dog instance
const rex = new Dog('Rex', 3, 'Golden Retriever');
rex.eat();   //* Output: Rex is eating.
rex.sleep(); //* Output: Rex is sleeping.
rex.bark();  //* Output: Rex is barking.

//* The Cat class inherits from Animal
class Cat extends Animal {
    constructor(name, age, color) {
        super(name, age);
        this.color = color;
    }

    meow() {
        console.log(`${this.name} is meowing.`);
    }
}

//* Creating a new Cat instance
const whiskers = new Cat('Whiskers', 2, 'Black');
whiskers.eat();   //* Output: Whiskers is eating.
whiskers.sleep(); //* Output: Whiskers is sleeping.
whiskers.meow();  //* Output: Whiskers is meowing.

//* The Bird class inherits from Animal
class Bird extends Animal {
    constructor(name, age, species) {
        super(name, age);
        this.species = species;
    }

    fly() {
        console.log(`${this.name} is flying.`);
    }
}

//* Creating a new Bird instance
const tweety = new Bird('Tweety', 1, 'Canary');
tweety.eat();   //* Output: Tweety is eating.
tweety.sleep(); //* Output: Tweety is sleeping.
tweety.fly();   //* Output: Tweety is flying.


//* Polymorphism

class ShapeShifter {
    transform() {
        console.log("ShapeShifter is transforming.");
    }
}

class DogShifter extends ShapeShifter {
    transform() {
        console.log("ShapeShifter is transforming into a dog.");
    }
}

class CatShifter extends ShapeShifter {
    transform() {
        console.log("ShapeShifter is transforming into a cat.");
    }
}

//* Creating instances
const genericShifter = new ShapeShifter();
const dogShifter = new DogShifter();
const catShifter = new CatShifter();

genericShifter.transform(); //* Output: ShapeShifter is transforming.
dogShifter.transform();     //* Output: ShapeShifter is transforming into a dog.
catShifter.transform();     //* Output: ShapeShifter is transforming into a cat.

class Enchanter {
    enchant() {
        console.log("Enchanter is enchanting an object.");
    }
}

class SwordEnchanter extends Enchanter {
    enchant() {
        console.log("Enchanter is enchanting a sword.");
    }
}

class ShieldEnchanter extends Enchanter {
    enchant() {
        console.log("Enchanter is enchanting a shield.");
    }
}

//* Creating instances
const genericEnchanter = new Enchanter();
const swordEnchanter = new SwordEnchanter();
const shieldEnchanter = new ShieldEnchanter();

genericEnchanter.enchant(); //* Output: Enchanter is enchanting an object.
swordEnchanter.enchant();   //* Output: Enchanter is enchanting a sword.
shieldEnchanter.enchant();  //* Output: Enchanter is enchanting a shield.

class Transmuter {
    transmute() {
        console.log("Transmuter is transmuting an element.");
    }
}

class FireTransmuter extends Transmuter {
    transmute() {
        console.log("Transmuter is transmuting fire.");
    }
}

class WaterTransmuter extends Transmuter {
    transmute() {
        console.log("Transmuter is transmuting water.");
    }
}

//* Creating instances
const genericTransmuter = new Transmuter();
const fireTransmuter = new FireTransmuter();
const waterTransmuter = new WaterTransmuter();

genericTransmuter.transmute(); //* Output: Transmuter is transmuting an element.
fireTransmuter.transmute();    //* Output: Transmuter is transmuting fire.
waterTransmuter.transmute();   //* Output: Transmuter is transmuting water.
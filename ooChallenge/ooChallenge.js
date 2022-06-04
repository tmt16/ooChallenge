class Vehicle {
    constructor(a, b, c){
        if (!Number.isFinite(c) || c <= 1900)
            throw new Error("Invalid year: " + c);
        if (typeof a != "string")
            throw new Error("Invalid Make: " + a);
        if (typeof b != "string")
            throw new Error("Invalid Make: " + b);

        this.make = a;
        this.model = b;
        this.year = c;
    }

    honk() {
        return "Beep"
    }

    toString() {
        const {make, model, year} = this;
        return `The vehicle is a ${make} ${model} from ${year}.`; 
    }
}

let myFirstVehicle = new Vehicle("Ford", "Focus", 2012);


class Car extends Vehicle {
    constructor(a, b, c) {
        super(a, b, c);
        this.numWheels = 4;
    }
}

let myFirstCar = new Car("Toyota", "Tundra", 2015);


class Motorcycle extends Vehicle {
    constructor(a, b, c) {
        super(a, b, c);
        this.numWheels = 2;
    }

    revEngine() {
        return "VROOM!"
    }
}

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);


class Garage {
    constructor(capacity, vehicles) {
        this.capacity = capacity;
        this.vehicles = [];

    }

    add(newVehicle) {
        const {capacity} = this;
        let {vehicles} = this;

        if (!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!"
        }
        if (vehicles.length < capacity) {
            vehicles.push(newVehicle);
            return "Vehicle Added!";
        } else {
            return "Sorry, we're full";
        }
    }
}

let garage = new Garage(2);



"use strict";
const consoleLogClasses = "color: yellow; background-color: black; font-weight: bold";
class Department {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    addEmployee(name) {
        this.employees.push(name);
    }
    get Name() {
        if (this.name) {
            return this.name;
        }
        return "Not defined";
    }
    set Name(value) {
        if (value) {
            this.name = value;
        }
    }
    toString() {
        console.log(`%c Department Name: ${this.name} | Employees: ${this.employees}`, consoleLogClasses);
    }
}
class BeerDepartment extends Department {
    constructor(name) {
        super(name);
        this.beers = [];
    }
    addBeer(name) {
        this.beers.push(name);
    }
    toString() {
        console.log(`%c Department Name: ${this.name} | Employees: ${this.employees} | Beers: ${this.beers}`, consoleLogClasses);
    }
}
const dep1 = new Department("Big Department");
dep1.addEmployee("Nikola Colic");
dep1.addEmployee("Miljan Simonovic");
dep1.toString();
const dep2 = new BeerDepartment("Beer Department");
dep2.addEmployee("Jovan Petrovic");
dep2.addEmployee("Matija Radicevic");
dep2.addBeer("Heineken");
dep2.toString();
dep2.Name = "New Beer Department";
dep2.toString();

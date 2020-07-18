"use strict";
const consoleLogInterfaces = "color: purple; background-color: black; font-weight: bold";
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        console.log("%c Person created", consoleLogInterfaces);
    }
    get FirstName() {
        if (this.firstName) {
            return this.firstName;
        }
        return "Not Defined";
    }
    get LastName() {
        if (this.lastName) {
            return this.lastName;
        }
        return "Not Defined";
    }
    get Age() {
        if (this.age) {
            return this.age;
        }
        return "Not Defined";
    }
}
class Prince {
    constructor(firstName, lastName, age, title) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.title = title;
    }
    royalSignature(corespondent) {
        console.log(`%c Dear ${corespondent},\n\nSup?\n\nSincerely, ${this.title} ${this.firstName} ${this.lastName}`, consoleLogInterfaces);
    }
}
const william = new Prince("William", "Princić", 44, "Sir");
william.royalSignature("Elizabeth II");

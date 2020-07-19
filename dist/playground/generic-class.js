"use strict";
class DataStorage {
    constructor() {
        this.storage = [];
        console.log("Initialized storage");
    }
    add(item) {
        this.storage.push(item);
    }
    remove(item) {
        this.storage = this.storage.filter((element) => element !== item);
    }
}
const storage = new DataStorage();
storage.add("Aguero");
storage.add("Jesus");
storage.add("Nmecha");
storage.remove("Jesus");
console.log(storage.storage);

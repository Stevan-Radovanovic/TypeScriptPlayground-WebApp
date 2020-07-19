class DataStorage<T> {
  constructor() {
    console.log("Initialized storage");
  }

  storage: T[] = [];

  add(item: T) {
    this.storage.push(item);
  }

  remove(item: T) {
    this.storage = this.storage.filter((element) => element !== item);
  }
}

const storage = new DataStorage<String>();
storage.add("Aguero");
storage.add("Jesus");
storage.add("Nmecha");
storage.remove("Jesus");
console.log(storage.storage);

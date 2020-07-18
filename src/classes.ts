const consoleLogClasses =
  "color: yellow; background-color: black; font-weight: bold";

class Department {
  protected employees: string[] = [];

  constructor(protected name: string) {}

  public addEmployee(name: string) {
    this.employees.push(name);
  }

  get Name() {
    if (this.name) {
      return this.name;
    }
    return "Not defined";
  }

  set Name(value: string) {
    if (value) {
      this.name = value;
    }
  }

  public toString() {
    console.log(
      `%c Department Name: ${this.name} | Employees: ${this.employees}`,
      consoleLogClasses
    );
  }
}

class BeerDepartment extends Department {
  private beers: string[] = [];

  constructor(name: string) {
    super(name);
  }

  public addBeer(name: string) {
    this.beers.push(name);
  }

  public toString() {
    console.log(
      `%c Department Name: ${this.name} | Employees: ${this.employees} | Beers: ${this.beers}`,
      consoleLogClasses
    );
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

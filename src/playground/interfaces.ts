const consoleLogInterfaces =
  "color: purple; background-color: black; font-weight: bold";

interface Royalty {
  title: string;
  royalSignature(corespondent: string): void;
}

class Person {
  constructor(
    protected firstName: string,
    protected lastName: string,
    protected age: number
  ) {
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

class Prince implements Royalty {
  constructor(
    protected firstName: string,
    protected lastName: string,
    protected age: number,
    public title: string
  ) {}

  royalSignature(corespondent: string): void {
    console.log(
      `%c Dear ${corespondent},\n\nSup?\n\nSincerely, ${this.title} ${this.firstName} ${this.lastName}`,
      consoleLogInterfaces
    );
  }
}

const william = new Prince("William", "Princić", 44, "Sir");
william.royalSignature("Elizabeth II");

export default class ConsoleLog {
  static consoleLog1 =
    "color: pink; background-color: black; font-weight: bold";

  static consoleLog2 =
    "color: yellow; background-color: black; font-weight: bold";

  static consoleLogInitialization(name: string) {
    console.log("%c Initializing " + name, this.consoleLog1);
  }

  static consoleLogValidation(name: string) {
    console.log("%c Validating " + name, this.consoleLog2);
  }
}

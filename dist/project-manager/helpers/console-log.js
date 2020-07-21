export default class ConsoleLog {
    static consoleLogInitialization(name) {
        console.log("%c Initializing " + name, this.consoleLog1);
    }
    static consoleLogValidation(name) {
        console.log("%c Validating " + name, this.consoleLog2);
    }
    static consoleLogEvent(name) {
        console.log("%c Event activated " + name, this.consoleLog3);
    }
}
ConsoleLog.consoleLog1 = "color: pink; background-color: black; font-weight: bold";
ConsoleLog.consoleLog2 = "color: yellow; background-color: black; font-weight: bold";
ConsoleLog.consoleLog3 = "color: green; background-color: black; font-weight: bold";

const consoleStyle = "background-color: black; font-weight: bold; color:white";
console.log("%c Search Address", consoleStyle);

const button = document.getElementById("button")! as HTMLButtonElement;
const input = document.getElementById("input")! as HTMLInputElement;
const div = document.getElementById("map")! as HTMLDivElement;

function getUserInput() {
  const value = input.value;
  console.log("%c Fetching input: " + value, consoleStyle);
}

button.addEventListener("click", getUserInput);

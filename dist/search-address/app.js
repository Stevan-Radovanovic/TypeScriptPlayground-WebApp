"use strict";
const consoleStyle = "background-color: black; font-weight: bold; color:white";
console.log("%c Search Address", consoleStyle);
const button = document.getElementById("button");
const input = document.getElementById("input");
const div = document.getElementById("map");
function getUserInput() {
    const value = input.value;
    console.log("%c Fetching input: " + value, consoleStyle);
}
button.addEventListener("click", getUserInput);
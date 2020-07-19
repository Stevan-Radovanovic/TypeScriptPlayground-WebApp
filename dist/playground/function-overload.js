"use strict";
function add(one, two) {
    if (typeof one === "string" || typeof two === "string") {
        return one.toString() + two.toString();
    }
    return one + two;
}
const result = add("5", 6);
console.log(result);

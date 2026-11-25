"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const studentAge = 78;
const campus = 'gulshan';
const isActive = true;
function greetUser(message) {
    console.log(message);
}
console.log(studentAge, campus, isActive);
console.log(greetUser(234245234434));
// Arrays
const rollNumbers = [13, 2345, 53, 53];
rollNumbers.forEach((rollNumbers) => rollNumbers.toFixed());
// Tuples
let user = [12, 'gulshan'];
// Cannot add directly third element
// user[2] = 324;
// Can add 3rd value using push which is a drawback of ts
// user.push(5457)
// Enums
var Priority;
(function (Priority) {
    Priority["High"] = "high";
    Priority["Medium"] = "medium";
    Priority["Low"] = "low";
})(Priority || (Priority = {}));
;
const priority = Priority.Low;
console.log(priority);
//# sourceMappingURL=index.js.map
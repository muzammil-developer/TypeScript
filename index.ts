const studentAge:number = 78;
const campus:string = 'gulshan';
const isActive:boolean = true;

function greetUser(message: any) {
    console.log(message);
}

console.log(studentAge, campus ,isActive)
console.log(greetUser(234245234434))


// Arrays

const rollNumbers: number[] = [13, 2345, 53, 53];
rollNumbers.forEach((rollNumbers) => rollNumbers.toFixed())


// Tuples

let user: [number, string] = [12, 'gulshan'];
// Cannot add directly third element
// user[2] = 324;

// Can add 3rd value using push which is a drawback of ts
// user.push(5457)


// Enums

enum Priority {
    High = 'high',
    Medium = 'medium',
    Low = 'low',
};

const priority:Priority = Priority.Low;
console.log(priority)

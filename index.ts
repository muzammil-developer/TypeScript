// const studentAge:number = 78;
// const campus:string = 'gulshan';
// const isActive:boolean = true;

// function greetUser(message: any) {
//     console.log(message);
// }

// console.log(studentAge, campus ,isActive)
// console.log(greetUser(234245234434))


// Arrays

// const rollNumbers: number[] = [13, 2345, 53, 53];
// rollNumbers.forEach((rollNumbers) => rollNumbers.toFixed())


// Tuples

// let user: [number, string] = [12, 'gulshan'];
// Cannot add directly third element
// user[2] = 324;

// Can add 3rd value using push which is a drawback of ts
// user.push(5457)


// Enums

// enum Priority {
//     High = 'high',
//     Medium = 'medium',
//     Low = 'low',
// };

// const priority:Priority = Priority.Low;
// console.log(priority)


// Functions

// const calculateTax = (income: number, taxYear: number = 2025) : number => {
//     if(taxYear < 2022) {
//         return income * 2.2
//     };
//     return income * 1.5;
// }
// console.log(calculateTax(1000))

// Objects

// const employee: {
//     id: number,
//     name: string
// } = {
//     id: 1234,
//     name: 'muzammil'
// };
// console.log(employee)

// Example of optiona property

// const employee2: {
//     id: number,
//     name?: string
// } = {
//     id: 1234,
// };

// console.log(employee2)

// Example of read only property in TS 

// const employee3: {
//     readonly id: number,
//     name?: string
// } = {
//     id: 1234,
// };
// console.log(employee3)

// I Cannot do this if the property is  readonly 

// employee3.id = 4564;
// console.log(employee3)



// Example of methods types in TS 

// const employee4: {
//     readonly id: number,
//     name?: string
//     retire: (date: Date) => void
// } = {
//     id: 1234,
//     retire: (date: Date) => {
//         console.log(date)
//     }
// };

// console.log(employee4.retire(new Date()))



// Type Aliases Example

// type employee = {
//     readonly id: number,
//     name?: string
//     retire: (date: Date) => void
// };

// const employee5:Employee = {
//     id: 2345;
//     retire: (date: Date) => {
//         console.log(date)
//     }
// };
// console.log(employee5)


// Union in TypeScript

// const kgToLbs = (weight: number | string): number => {
//     if(typeof weight === 'number') {
//         return weight * 2.2
//     };

//     return parseInt(weight) * 2.2
// }

// console.log(kgToLbs(45))


// Example of intersection in TS 

// type Dragable = {
//     drag: () => void
// }

// type Resizeable = {
//     resize: () => void
// }

// type UIWidget = Dragable & Resizeable

// let textBox: UIWidget = {
//     drag: () => {},
//     resize: () => {}
// }
// console.log(textBox)


// Literal(exact, specific)

// type Cities = 'karachi' | 'Lahore';
// type Metric = 'cm' | 'inch';
// type Quantity = 50 | 100;

// const quantity:Quantity = 100;
// const distance:Metric = 'inch';


// Nullable Types

const greetUser = (name: string | null | undefined) => {
if(name) {
    console.log(name);
} else {
    console.log('Good Morning')
}
};

console.log(greetUser(undefined))
